// file này lưu hàm tiện ích giúpp mình
// liên kết với services jwt và nhờ nó kí cho mình 1 token

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

// signToken là hàm kí token
export const signToken = ({
  payload,
  privateKey = process.env.JWT_SECRET as string,
  options = { algorithm: 'HS256' }
}: {
  payload: string | object | Buffer
  privateKey?: string
  options?: jwt.SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    // kêu jwt kí cho mình
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) throw reject(error)
      else resolve(token as string)
    })
  })
}
