// Viết hàm validate nhận vào các checkSchema và trả ra các middleware xử lý lỗi

import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import { Request, Response, NextFunction } from 'express'

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req) // run thì mới chép lỗi vào req
    const errors = validationResult(req) // lấy danh sách lỗi từ req ra
    if (errors.isEmpty()) {
      return next()
    } else {
      res.status(422).json({
        message: 'Register validation failed',
        errors: errors.mapped()
      })
    }
  }
}
