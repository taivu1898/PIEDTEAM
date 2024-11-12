import { Request, Response, NextFunction } from 'express'
import formidable from 'formidable'
import path from 'path'

export const uploadSingleImageController = async (
  req: Request, //
  res: Response,
  next: NextFunction
) => {
  // đường dẫn đến folder đang chạy
  // path.resolve('uploads'): đường dẫn dến thư mục lưu trữ
  // Tạo khung để khi người dùng gửi file lên thì ta sẽ dùng khung đó để kiểm tra (ép)

  const form = formidable({
    maxFiles: 1,
    maxFileSize: 1024 * 300, // 1 hình tối da 300kb
    keepExtensions: true, // giữ lại đuôi file dẻ kiểm tra
    uploadDir: path.resolve('uploads')
  })
  // đã chuẩn bị xong form để kiểm tra các file rồi, giữ mình sẽ dùng form để kiểm tra req người dùng gửi lên
  form.parse(req, (err, fields, files) => {
    // files là object chứa các file do người dùng gửi lên
    if (err) {
      throw err
    } else {
      res.json({
        message: 'Upload image successfully'
      })
    }
  })
}
