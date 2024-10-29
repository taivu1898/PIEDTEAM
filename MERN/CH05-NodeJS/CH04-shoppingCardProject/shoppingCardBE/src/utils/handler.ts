import { Request, Response, NextFunction, RequestHandler } from 'express'

// Viết hàm wrapAsync
// wrapAsync là hàm nhận vào req handler (middleware và controller)
// 'req handler' này không có cấu trúc try catch next
// wrapAsync sẽ nhận và trả về 1 req handler khác được tạo từ try catch next và req handler ban dầu

export const wrapAsync = (func: any) => {
  // Đưa func và nhận được req handler mới
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}
