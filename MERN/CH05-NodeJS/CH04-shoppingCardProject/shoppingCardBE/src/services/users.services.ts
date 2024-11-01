//userService chứa các method giúp xử lí liên quan đến users collection

import User from '~/models/schemas/User.schema'
import databaseService from './database.services'
import { LoginReqBody, RegisterRequestBody } from '~/models/requests/users.request'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/utils/jwt'
import { TokenType } from '~/constants/enums'
import dotenv from 'dotenv'
import { ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import { ObjectId } from 'mongodb'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
dotenv.config()

class UsersServices {
  //viết hàm dùng jwt để ký access_token
  private signAccessToken(user_id: string) {
    return signToken({
      payload: { user_id, token_type: TokenType.AccessToken },
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN }
    })
  }

  //viết hàm dùng jwt để ký refresh_token
  private signRefreshToken(user_id: string) {
    return signToken({
      payload: { user_id, token_type: TokenType.RefreshToken },
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN }
    })
  }

  async checkEmailExist(email: string) {
    //tìm user nào đg xài email đó, ko có tức là ko ai xài
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }

  async register(payLoad: RegisterRequestBody) {
    const result = await databaseService.users.insertOne(
      new User({
        ...payLoad,
        password: hashPassword(payLoad.password),
        date_of_birth: new Date(payLoad.date_of_birth)
      })
    )
    // sau khi tạo tài khoản và lưu lên database ta sẽ kí ac và rf để đưa
    // cho ng dùng, nhưng mà muốn k1i thì cần user_id của account đó
    const user_id = result.insertedId.toString()
    // ký
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])

    return {
      access_token,
      refresh_token
    }
  }

  async login({ email, password }: LoginReqBody) {
    //dùng email và password để tìm user
    const user = await databaseService.users.findOne({
      email,
      password: hashPassword(password)
    })

    if (!user) {
      throw new ErrorWithStatus({
        status: HTTP_STATUS.UNPROCESSABLE_ENTITY, //422
        message: USERS_MESSAGES.EMAIL_OR_PASSWORD_IS_INCORRECT
      })
    }
    //nếu có user -> tạo ac và rf token
    const user_id = user._id.toString()
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])
    //luu7 refresh token lại
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
}

let usersServices = new UsersServices()
export default usersServices
