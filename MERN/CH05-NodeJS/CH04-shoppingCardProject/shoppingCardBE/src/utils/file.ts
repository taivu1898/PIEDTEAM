import fs from 'fs'
import path from 'path'

// initFolder có chưa, chưa có thì tạo
export const initFolder = () => {
  const uploadsFolderPath = path.resolve('uploads')
  // nếu mà đường dẫn không dẫn đến thư mục thì anh em mình tạo mới
  if (!fs.existsSync(uploadsFolderPath)) {
    fs.mkdirSync(uploadsFolderPath, {
      recursive: true // đệ quy | có thể tạo lòng các thư mục vào nhau
    })
  }
}
