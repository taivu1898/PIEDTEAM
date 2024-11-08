// userService chứa các method giúp xử lý liên quan đến users collection

import User from '~/models/schemas/User.schema'
import databaseService from './database.services'
import { loginRegbody, RegisterReqBody } from '~/models/requests/users.request'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/jwt'
import { TokenType, UserVerifyStatus } from '~/constants/enums'
import { ErrorWithStatus } from '~/models/schemas/errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import { ObjectId } from 'mongodb'

class UserService {
  // viết hàm dùng đúng jwt để đăng ký access_token
  private signAccessToken(user_id: string) {
    return signToken({
      payLoad: { user_id, tokenType: TokenType.AccessToken },
      privateKey: process.env.JWT_SECRET_ACCESS_TOKEN as string,
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN }
    })
  }

  // viết hàm dùng đúng jwt để đăng ký access_token
  private signRefreshToken(user_id: string) {
    return signToken({
      payLoad: { user_id, tokenType: TokenType.RefreshToken },
      privateKey: process.env.JWT_SECRET_REFRESH_TOKEN as string,
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN }
    })
  }

  private signEmailVerifyToken(user_id: string) {
    return signToken({
      payLoad: { user_id, tokenType: TokenType.EmailVerificationToken },
      privateKey: process.env.JWT_SECRET_EMAIL_TOKEN as string,
      options: { expiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRE_IN }
    })
  }

  private signForgotPasswordToken(user_id: string) {
    return signToken({
      payLoad: { user_id, tokenType: TokenType.ForgotPassordToken },
      privateKey: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
      options: { expiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRE_IN }
    })
  }

  async register(payload: RegisterReqBody) {
    const user_id = new ObjectId()
    const email_verify_token = await this.signEmailVerifyToken(user_id.toString())
    const result = await databaseService.users.insertOne(
      new User({
        _id: user_id,
        email_verify_token,
        ...payload,
        password: hashPassword(payload.password),
        date_of_birth: new Date(payload.date_of_birth)
      })
    )
    // sau khi tạo tài khoản và lưu trên database ta sẽ ký acc và rf để đưa
    // cho người dùng, nhưng mà muốn ký thì phải cần user_id của account đó
    // ký
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id.toString()),
      this.signRefreshToken(user_id.toString())
    ])

    console.log(`
      Mô phỏng gửi link qua mail xác thực dăng kí:
      http://localhost:3000/users/verify-email/?email_verify_token=${email_verify_token}
    `)
    // lưu refresh token lại
    databaseService.refresh_tokens.insertOne(
      new RefreshToken({
        token: refresh_token,
        user_id: new ObjectId(user_id)
      })
    )
    return {
      access_token,
      refresh_token
    }
  }
  async checkEmailExist(email: string): Promise<Boolean> {
    // tìm user nào đang xài email đó, ko có user thì nghĩa là email chưa ai xài
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }

  async checkRefreshToken({ user_id, refresh_token }: { user_id: string; refresh_token: string }) {
    const refreshToken = await databaseService.refresh_tokens.findOne({
      user_id: new ObjectId(user_id),
      token: refresh_token
    })
    if (!refreshToken) {
      throw new ErrorWithStatus({
        status: HTTP_STATUS.UNAUTHORIZED, // 401
        message: USERS_MESSAGES.REFRESH_TOKEN_IS_INVALID
      })
    }
    return refresh_token
  }

  async checkEmailVerifyToken({
    user_id,
    email_verify_token
  }: {
    user_id: string
    email_verify_token: string //
  }) {
    // tìm user bằng user_id và email_verify_token
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id),
      email_verify_token
    })
    if (!user) {
      throw new ErrorWithStatus({
        status: HTTP_STATUS.UNPROCESSABLE_ENTITY,
        message: USERS_MESSAGES.EMAIL_VERIFY_TOKEN_IS_INVALID
      })
    }
    return user
  }

  async findUserById(user_id: string) {
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        status: HTTP_STATUS.NOT_FOUND,
        message: USERS_MESSAGES.USER_NOT_FOUND
      })
    } else {
      return user
    }
  }

  async login({ email, password }: loginRegbody) {
    // dùng email và password để tìm user
    const user = await databaseService.users.findOne({
      email,
      password: hashPassword(password)
    })

    if (!user) {
      throw new ErrorWithStatus({
        status: HTTP_STATUS.UNPROCESSABLE_ENTITY, // 422
        message: USERS_MESSAGES.EMAIL_OR_PASSWORD_IS_INCORRECT
      })
    }
    // nếu có user thì tạo at và rf
    const user_id = user._id.toHexString()
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])
    // lưu refresh token lại
    databaseService.refresh_tokens.insertOne(
      new RefreshToken({
        token: refresh_token,
        user_id: new ObjectId(user_id)
      })
    )
    return {
      access_token,
      refresh_token
    }
  }
  async logout(refresh_token: string) {
    await databaseService.refresh_tokens.deleteOne({ token: refresh_token })
  }

  async verifyEmail(user_id: string) {
    await databaseService.users.updateOne(
      {
        _id: new ObjectId(user_id)
      },
      [
        {
          $set: {
            verify: UserVerifyStatus.Verified,
            email_verify_token: '',
            updated_at: '$$NOW'
          }
        }
      ]
    )
    // lưu rf token vào db
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])
    await databaseService.refresh_tokens.insertOne(
      new RefreshToken({
        token: refresh_token,
        user_id: new ObjectId(user_id)
      })
    )
    return {
      access_token,
      refresh_token
    }
  }

  async resendEmailVerify(user_id: string) {
    const email_verify_token = await this.signEmailVerifyToken(user_id)
    await databaseService.users.updateOne({ _id: new ObjectId(user_id) }, [
      {
        $set: {
          email_verify_token,
          update_at: `$$NOW`
        }
      }
    ])
    console.log(`
      Mô phỏng gửi link qua mail xác thực dăng kí:
      http://localhost:3000/users/verify-email/?email_verify_token=${email_verify_token}
    `)
  }

  async forgotPassword(email: string) {
    const user = (await databaseService.users.findOne({
      email
    })) as User
    // lấy user id tạo mã forgot password token
    const user_id = user._id as ObjectId
    const forgot_password_token = await this.signForgotPasswordToken(user_id.toString())
    // Lưu vào dbDb
    await databaseService.users.updateOne(
      {
        _id: user_id
      },
      [
        {
          $set: {
            forgot_password_token,
            update_at: `$$NOW`
          }
        }
      ]
    )
    console.log(`
      Mô phỏng gửi link qua mail để đổi mk:
      http://localhost:8000/reset-password/?forgot_password_token=${forgot_password_token}
    `)
  }
}
// tạo instance
let userService = new UserService()
export default userService
