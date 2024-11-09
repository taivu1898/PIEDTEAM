import { NextFunction, Request, Response } from 'express'
import {
  loginRegbody,
  LogoutReqBody,
  RegisterReqBody,
  ResetPasswordReqBody,
  TokenPayload,
  UpdateMeReqBody,
  VerifyEmailReqQuery,
  VerifyForgotPasswordTokenReqBody
} from '~/models/requests/users.request'
import userService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { ErrorWithStatus } from '~/models/schemas/errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import { UserVerifyStatus } from '~/constants/enums'

// route này nhận vào email và password để tạo tài khoản cho mình
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  // lấy email và password từ req.body mà người dùng muốn đăng tài khoản
  // thêm tí logic trước khi trả kết quả cho người dùng
  const { email } = req.body
  // tạo user và lưu vào database
  // try {
  // kiểm tra email có tồn tại chưa
  const isEmailExist = await userService.checkEmailExist(email)
  if (isEmailExist) {
    throw new ErrorWithStatus({
      status: HTTP_STATUS.UNPROCESSABLE_ENTITY, // 422
      message: USERS_MESSAGES.EMAIL_ALREADY_EXISTS
    })
  }
  const result = await userService.register(req.body)
  // nếu thành công
  res.status(HTTP_STATUS.CREATED).json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    data: result
  })
  // } catch (error) {
  //   // res.status(400).json({
  //   //   message: 'Register failed',
  //   //   error
  //   // })
  //   next(error)
  // }
}

export const loginController = async (
  req: Request<ParamsDictionary, any, loginRegbody>,
  res: Response,
  next: NextFunction
) => {
  // Cần lấy email và password để tìm xem user nào đang sở hữu
  // Nếu không có user nào ngừng cuộc chơi
  // Nếu có thì tạo at và rf

  const { email, password } = req.body
  const result = await userService.login({ email, password })
  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    result // ac vaf rf
  })
}

export const logoutController = async (
  req: Request<ParamsDictionary, any, LogoutReqBody>,
  res: Response,
  next: NextFunction
) => {
  // xem thử user_id trong payload của refresh_token và access_token có giống không
  const { refresh_token } = req.body
  const { user_id: user_id_at } = req.decode_authorization as TokenPayload
  const { user_id: user_id_rf } = req.decode_refresh_token as TokenPayload
  if (user_id_at != user_id_rf) {
    throw new ErrorWithStatus({
      status: HTTP_STATUS.UNAUTHORIZED, //401
      message: USERS_MESSAGES.REFRESH_TOKEN_IS_INVALID
    })
  }
  // nếu mà trùng rồi thì mình xem thử refresh_token có được quyền dịch vụ không
  await userService.checkRefreshToken({
    user_id: user_id_at,
    refresh_token
  })
  await userService.logout(refresh_token)
  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.LOGOUT_SUCCESS
  })
  // khi nào có mã đó trong database thì mình tiến hành logout (xóa rf khỏi hệ thống)
}

export const verifyEmailController = async (
  req: Request<ParamsDictionary, any, any, VerifyEmailReqQuery>,
  res: Response,
  next: NextFunction
) => {
  // Vafo tới controller thì nghĩa là email_verify_token đã được xác thực
  const { email_verify_token } = req.query
  const { user_id } = req.decode_email_verify_token as TokenPayload
  // Kiểm tra xem user_id và email_verify_token có tồn tại trong db hay không
  // Kiểm tra xem người dùng có unverify không ?
  // Tiến hành verifyEmail
  const user = await userService.checkEmailVerifyToken({ user_id, email_verify_token })
  if (user.verify == UserVerifyStatus.Verified) {
    res.status(HTTP_STATUS.OK).json({
      message: USERS_MESSAGES.EMAIL_HAS_BEEN_VERIFIED
    })
  } else if (user.verify == UserVerifyStatus.Banned) {
    res.status(HTTP_STATUS.OK).json({
      message: USERS_MESSAGES.EMAIL_HAS_BEEN_BANNED
    })
  } else {
    const result = await userService.verifyEmail(user_id)
    res.status(HTTP_STATUS.OK).json({
      message: USERS_MESSAGES.VERIFY_EMAIL_SUCCESS,
      result
    })
  }
}

export const resendEmailVerifyController = async (
  req: Request<ParamsDictionary, any, any>,
  res: Response,
  next: NextFunction
) => {
  // Lấy user_id tìm xem user này còn tồn tại không
  const { user_id } = req.decode_authorization as TokenPayload
  // Từ user đó xem thử nó đã verify bị ban hay là chưa verify
  // Chưa verify thì mới resendEmailVerify
  const user = await userService.findUserById(user_id)

  if (user.verify === UserVerifyStatus.Verified) {
    res.status(HTTP_STATUS.ACCEPTED).json({
      message: USERS_MESSAGES.EMAIL_HAS_BEEN_VERIFIED
    })
  } else if (user.verify == UserVerifyStatus.Banned) {
    res.status(HTTP_STATUS.OK).json({
      message: USERS_MESSAGES.EMAIL_HAS_BEEN_BANNED
    })
  } else {
    await userService.resendEmailVerify(user_id)
    res.status(HTTP_STATUS.OK).json({
      message: USERS_MESSAGES.RESEND_EMAIL_VERIFY_TOKEN_SUCCESS
    })
  }
}

export const forgotPasswordController = async (
  req: Request<ParamsDictionary, any, any>,
  res: Response,
  next: NextFunction
) => {
  // Người dùng cung câp  email cho mình
  const { email } = req.body
  // Kiểm tra email có tồn tại trong db k
  const hasEmail = await userService.checkEmailExist(email)
  // Có thì mình tạo token và mình gửi
  if (!hasEmail) {
    throw new ErrorWithStatus({
      status: HTTP_STATUS.NOT_FOUND,
      message: USERS_MESSAGES.USER_NOT_FOUND
    })
  } else {
    await userService.forgotPassword(email)
    res.status(HTTP_STATUS.OK).json({
      message: USERS_MESSAGES.CHECK_EMAIL_TO_RESET_PASSWORD
    })
  }
}

export const verifyForgotPasswordTokenController = async (
  req: Request<ParamsDictionary, any, VerifyForgotPasswordTokenReqBody>,
  res: Response,
  next: NextFunction
) => {
  // fe gửi mã forgot_password_token để nhờ xác minh
  // Mình đã xác minh forgot_pasword_token là chuẩn ở middleware
  // Giờ mình xác minh forgot_password_token còn hiệu lực với user_id

  const { user_id } = req.decode_forgot_password_token as TokenPayload
  const { forgot_password_token } = req.body
  const result = await userService.checkForgotPasswordToken({
    user_id, //
    forgot_password_token
  })
  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.VERIFY_FORGOT_PASSWORD_TOKEN_SUCCESS
  })
}

export const resetPasswordController = async (
  req: Request<ParamsDictionary, any, ResetPasswordReqBody>,
  res: Response,
  next: NextFunction
) => {
  // fe gửi mã forgot_password_token để xác minh
  // mình đã xác minh forgot_password_token là chuẩn ở middlewares
  // giờ mình xác minh forgot_password_token còn hiệu lực với user_id
  const { user_id } = req.decode_forgot_password_token as TokenPayload
  const { forgot_password_token, password } = req.body
  await userService.checkForgotPasswordToken({
    user_id,
    forgot_password_token
  })
  // reset password neeus token ok
  await userService.resetPassword({ user_id, password })
  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.RESET_PASSWORD_IS_SUCCESS
  })
}

export const getMeController = async (
  req: Request<ParamsDictionary, any, ResetPasswordReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decode_authorization as TokenPayload
  const userInfor = await userService.getMe(user_id)

  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.GET_PROFILE_SUCCESS,
    userInfor
  })
}

export const updateMeController = async (
  req: Request<ParamsDictionary, any, UpdateMeReqBody>,
  res: Response,
  next: NextFunction
) => {
  // Người dùng truyền lên accesstoken dểm mình biết họ là ai
  const { user_id } = req.decode_authorization as TokenPayload
  // Update những gì mà họ cung cấp trong body
  const payload = req.body
  const isVerified = await userService.checkEmailVerifid(user_id)
  if (!isVerified) {
    throw new ErrorWithStatus({
      status: HTTP_STATUS.FORBIDDEN, // 403
      message: USERS_MESSAGES.USER_NOT_VERIFIED
    })
  }
  // Nếu đã verify thì tiến hành cập nhật
  const userInfor = await userService.updateMe({ user_id, payload })

  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.UPDATE_PROFILE_SUCCESS,
    userInfor
  })
}
