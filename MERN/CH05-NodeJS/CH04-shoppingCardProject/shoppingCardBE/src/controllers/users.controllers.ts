// Controller là handler có nhiệm vụ xử lý logic các thông tin khi đã vào controller thì phải clean

import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseServices from '~/services/database.services'
import usersServices from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  // Vào đây là không kiểm tra dữ liệu nữa, chỉ cần dùng thôi
  const { email, password } = req.body
  // Vào db kiểm tra xem đúng hay không ?
  // Xà lơ
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
export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  // Vào db và nhét vào collection users
  try {
    const result = await usersServices.register({ email, password })
    res.status(201).json({
      massage: 'Register success',
      data: result
    })
  } catch (error) {
    res.status(400).json({
      massage: 'Register failed',
      error
    })
  }
}
