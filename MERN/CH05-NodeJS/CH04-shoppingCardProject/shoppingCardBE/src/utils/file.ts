import fs from 'fs'
import { Request } from 'express'
import formidable, { File } from 'formidable'
import { UPLOAD_TEMP_DIR } from '~/constants/dir'

// initFolder có chưa, chưa có thì tạo
export const initFolder = () => {
  // nếu mà đường dẫn không dẫn đến thư mục thì anh em mình tạo mới
  if (!fs.existsSync(UPLOAD_TEMP_DIR)) {
    fs.mkdirSync(UPLOAD_TEMP_DIR, {
      recursive: true // đệ quy | có thể tạo lòng các thư mục vào nhau
    })
  }
}

export const handleUploadImage = async (req: Request) => {
  // Chuẩn bị lưới lọc
  const form = formidable({
    uploadDir: UPLOAD_TEMP_DIR,
    maxFiles: 4,
    maxFileSize: 300 * 1024,
    keepExtensions: true,
    maxTotalFileSize: 300 * 1024 * 4,
    filter: ({ name, originalFilename, mimetype }) => {
      // name là tên của field đang chứa file
      // originalFilename là tên gốc ban đầu của file
      // mimetype là kiểu của file được gủi lên 'video/mkv' 'image/png' 'image/jpeg'
      const valid = name == 'image' && Boolean(mimetype?.includes('image'))
      if (!valid) {
        form.emit('error' as any, new Error('File type is not valid') as any)
      }
      return valid
    }
  })

  // Xài lưới lọc
  return new Promise<File[]>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      if (!files.image) return reject(new Error('Image is empty'))
      return resolve(files.image as File[])
    })
  })
}

// getNameFromFullnameFile: hàm nhận vào full tên *.png
// Trả ra add
export const getNameFromFullnameFile = (filename: string) => {
  const nameArr = filename.split('.')
  // Xử lý trường hơp *.*.png
  nameArr.pop()
  return nameArr.join('-')
}
