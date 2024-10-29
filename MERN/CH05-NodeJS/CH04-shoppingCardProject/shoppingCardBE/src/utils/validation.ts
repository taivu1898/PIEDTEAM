// Viết hàm validate nhận vào các checkSchema và trả ra các middleware xử lý lỗi

import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import { Request, Response, NextFunction } from 'express'
import { EntityError, ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/htppStatus'

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req) // run thì mới chép lỗi vào req
    const errors = validationResult(req) // lấy danh sách lỗi từ req ra
    if (errors.isEmpty()) {
      return next()
    } else {
      const errorsObject = errors.mapped() // Danh sách các lỗi dạng Object
      const entityError = new EntityError({ errors: {} }) // Đây là Object lỗi mà mình muốn thay thế

      // Duyệt key
      for (const key in errorsObject) {
        // Lấy msg trong từng trường dữ liệu của errorsObject ra
        const { msg } = errorsObject[key]
        // Nếu msg có dạng ErrorWithStatus và có status dạng 422 thì mình next(err) nó ra trước
        if (msg instanceof ErrorWithStatus && msg.status != HTTP_STATUS.UNPROCESSABLE_ENTITY) {
          return next(msg)
        }
        // Nếu không phải dạng đặc biệt thì bỏ vào entityError
        entityError.errors[key] = msg
      }

      res.status(422).json({
        message: 'Invalid value',
        errors: errorsObject
      })
    }
  }
}
