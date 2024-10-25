// Chuẩn bị hàm mã hóa 1 nội dung nào đó theo mã SHA256

import { createHash } from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

function sha256(content: string) {
  return createHash('sha256').update(content).digest('hex')
}

// Viết hàm hashPassword
export function hashPassword(password: string) {
  return sha256(password + process.env.PASSWORD_SECRET)
}
