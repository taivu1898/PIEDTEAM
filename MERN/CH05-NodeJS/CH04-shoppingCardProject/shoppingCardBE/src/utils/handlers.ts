import { Request, Response, NextFunction, RequestHandler } from 'express'
// file này chứa hàm có tên là wrapAsync
//wrapAsync là 1 hàm nhận vào 'async request handler'
// và nó tạo ra cấu trúc try catch next cho 'async request handler'
// từ đó 'async request handler' có thẻ throw thoải mái mà ko cấn try catch next
export const wrapAsync = (func: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
