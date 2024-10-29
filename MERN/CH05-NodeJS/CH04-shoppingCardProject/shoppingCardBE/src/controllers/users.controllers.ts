// Controller là handler có nhiệm vụ xử lý logic các thông tin khi đã vào controller thì phải clean

import { NextFunction, Request, Response } from 'express'
import { RegisterReqBody } from '~/models/requests/users.request'
import usersServices from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/htppStatus'

export const loginController = (req: Request, res: Response) => {
  // Vào đây là không kiểm tra dữ liệu nữa, chỉ cần dùng thôi
  const { email, password } = req.body
  // Vào db kiểm tra xem đúng hay không ?
  // Xà lơ
  throw new Error('Lỗi rớt mạng')
  if (email === 'lehodiep.1999@gmail.com' && password === 'weAreNumberOne') {
    res.status(200).json({
      massage: 'login success',
      data: {
        fname: 'Điệp',
        age: 1999
      }
    })
  } else {
    res.status(400).json({
      massage: 'Invalid email or password'
    })
  }
}

// registerController nhận vào thông tin đăng ký của người dùng
// và vào db để tạo user mới lưu vào
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body
  // Vào db và nhét vào collection users

  // Kiểm tra email đc gửi lên có tồn tại chưa
  const isDup = await usersServices.checkEmailExist(email)
  if (isDup) {
    throw new ErrorWithStatus({
      status: HTTP_STATUS.UNPROCESSABLE_ENTITY, // 422
      message: 'Email has been used'
    })
  }

  const result = await usersServices.register(req.body)
  res.status(201).json({
    massage: 'Register success',
    data: result
  })
}
