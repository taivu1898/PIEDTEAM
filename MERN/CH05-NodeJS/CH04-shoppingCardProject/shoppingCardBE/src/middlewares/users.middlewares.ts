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
import { checkSchema } from 'express-validator'
import { validate } from '~/utils/validation'

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

// Viết hàm kiểm tra req.body của chức năng đăng ký tài khoản
export const registerValidator = validate(
  checkSchema({
    // Công nghệ cũ là ValidationChain
    // Công nghệ mới là RunnableValidationChain
    name: {
      notEmpty: {
        errorMessage: 'Name is required'
      },
      isString: {
        errorMessage: 'Name must be string'
      },
      trim: true,
      isLength: {
        options: {
          min: 1,
          max: 100
        },
        errorMessage: "Name's length must be between 1 and 100"
      }
    },
    email: {
      notEmpty: {
        errorMessage: 'Email is required'
      },
      isEmail: true,
      trim: true
    },
    password: {
      notEmpty: {
        errorMessage: 'Password is required'
      },
      isString: {
        errorMessage: 'Password must be string'
      },
      isLength: {
        options: {
          min: 8,
          max: 50
        },
        errorMessage: "Password's length must be between 8 and 50"
      },
      isStrongPassword: {
        options: {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: 'Password must be at least 8 characters. 1 lowercase, 1 uppercase, 1 number and 1 symbol'
      }
    },
    confirm_password: {
      notEmpty: {
        errorMessage: 'confirm password is required'
      },
      isString: {
        errorMessage: 'confirm password must be string'
      },
      isLength: {
        options: {
          min: 8,
          max: 50
        },
        errorMessage: "comfirm_password's length must be between 8 and 50"
      },
      isStrongPassword: {
        options: {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: 'confirm_password must be at least 8 characters. 1 lowercase, 1 uppercase, 1 number and 1 symbol'
      },
      custom: {
        options: (value, { req }) => {
          // Value lúc này là confirm_password
          if (value !== req.body.password) {
            throw new Error(`Confirm_password doesn't match password`)
          }
          return true
        }
      }
    },

    date_of_birth: {
      isISO8601: {
        options: {
          strict: true,
          strictSeparator: true
        }
      }
    }
  })
)
