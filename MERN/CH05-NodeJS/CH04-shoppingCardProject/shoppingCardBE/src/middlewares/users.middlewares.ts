// Middlewares là một handler có nhiệm vụ kiểm tra các giá trị mà người dùng gửi lên server | có hay không, không được vào db -> sai nguyên tắc ba lớp
// Nếu mà kiểm tra thành công thì next()
// Còn mà không ok thì mình res.json

// Mô phỏng người dùng muốn login (đăng nhập)
// Họ gửi req email và password lên server
// req này phải đi qua middleware này trước

// Vậy middlewares này sẽ chạy khi người dùng muốn login
// và middlewares này sẽ kiểm tra email và password

// import các interface của express để sử dụng cho việc định nghĩa

import { Request, Response, NextFunction } from 'express'

// Trùng tên file thì mới default
// Không thì export bình thường
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.body)
  const { email, password } = req.body // Lấy email và password trong req ra kiểm tra
  // Nếu một trong 2 không được gửi lên
  if (!email || !password) {
    res.status(400).json({
      message: 'Missing email or password'
    })
  } else {
    // Nếu không bị gì cả thì next
    next()
  }
}
