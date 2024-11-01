//viết hàm validate nhận vào checkSchema
//và trả ra middleware xử lí lỗi

import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import { NextFunction, Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/Errors'
export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req) //run thì mới chép lỗi vào req đc
    const errors = validationResult(req) //lấy danh sách lội từ req ra
    if (errors.isEmpty()) {
      return next()
    } else {
      const errorObject = errors.mapped()
      const entityError = new EntityError({ errors: {} })
      // for in duyệt key
      for (const key in errorObject) {
        const { msg } = errorObject[key] //lấy msg trong mỗi thuộc tính
        //nếu có nội dung lỗi nào có nội dung ErrorWithStatus hoặc lỗi có mã khác 422
        if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
          next(msg)
        }
        //những lỗi là 422 sẽ đc nhét vào entity Error
        entityError.errors[key] = errorObject[key].msg
      }
      next(entityError)
    }
  }
}
