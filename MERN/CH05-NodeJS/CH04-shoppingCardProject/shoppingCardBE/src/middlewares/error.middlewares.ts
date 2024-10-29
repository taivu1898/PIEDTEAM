import { Request, Response, NextFunction } from 'express'

// File định nghĩa làm handler tổng
// Nơi ra các lỗi từ toàn bộ hệ thống sẽ đổ về đây
// Lỗi từ validate đổ về sẽ có mã 422 mình có thể tận dụng
// Đôi khi trong validate có lỗi đặc biệt có dạng ErrorWithStatus
// Lỗi từ controller có thể là lỗi do mình ErrorWithStatus
// Lỗi rớt mạng thì không có status

import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/htppStatus'

// Lỗi từ các nơi đổ về thì có thể có, hoặc không thể có status
export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(omit(err, ['status']))
}
