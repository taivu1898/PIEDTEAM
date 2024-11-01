import { NextFunction, Request, Response } from 'express'
import { LoginReqBody, RegisterRequestBody } from '~/models/requests/users.request'
import usersServices from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
//controllers là tầng xử lí logic và call database thông qua services

//route này nhận vào email và password để tạo tài khoản cho mình
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterRequestBody>,
  res: Response,
  next: NextFunction
) => {
  // lấy email và password từ req.body mà người dùng muốn đăng kí tài khoản
  const { email } = req.body
  //tạo user và lưu vào database

  //kiểm tra email đc gửi lên có tồn tại chưa
  const isDub = await usersServices.checkEmailExist(email)
  if (isDub) {
    throw new ErrorWithStatus({
      status: HTTP_STATUS.UNAUTHORIZED, //401
      message: USERS_MESSAGES.EMAIL_ALREADY_EXISTS
    })
  }

  const result = await usersServices.register(req.body)
  //nếu thành công
  res.status(HTTP_STATUS.OK).json({
    msg: USERS_MESSAGES.REGISTER_SUCCESS,
    data: result
  })
}

export const loginController = async (
  req: Request<ParamsDictionary, any, LoginReqBody>,
  res: Response,
  next: NextFunction
) => {
  //cần lấy email và password để tìm xem user nào đg sở hữu
  //nếu ko có user nào thì ngừng cuộc chơi
  //nếu có thì tạo access và refresh token
  const { email, password } = req.body
  const result = await usersServices.login({ email, password })
  res.status(HTTP_STATUS.OK).json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    result
  })
}
