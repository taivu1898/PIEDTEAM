// đây là một middlewares giúp mình lọc lại request body
// chỉ lấy những thứ mình muốn thôi, còn những cái mình ko muốn thì bỏ đi

import { pick } from 'lodash'
import { Request, Response, NextFunction } from 'express'

export const filterMiddleware = <T>(filterKeys: Array<keyof T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    req.body = pick(req.body, filterKeys)
    next()
  }
}
