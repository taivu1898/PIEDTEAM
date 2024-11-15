import { Request, Response, NextFunction } from 'express'
import path from 'path'
import { UPLOAD_DIR } from '~/constants/dir'
import HTTP_STATUS from '~/constants/httpStatus'

export const serveImageController = (req: Request, res: Response, next: NextFunction) => {
  const { filename } = req.params
  res.sendFile(path.resolve(UPLOAD_DIR, filename), (err) => {
    if (err) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        message: 'File not found'
      })
    }
  })
}
