import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

// File này chứa hàm dùng để tạo ra token bằng công nghệ jwt
// Hàm chỉ tạo ra token chứ không phải tạo ra ac hay rf

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
    jwt.sign(payload, privateKey, options, (err, token) => {
      if (err) {
        throw reject(err)
      } else {
        resolve(token as string)
      }
    })
  })
}
