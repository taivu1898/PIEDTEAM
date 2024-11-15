import { Request, Response, NextFunction } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import mediaServices from '~/services/medias.services'

export const uploadImageController = async (
  req: Request, //
  res: Response,
  next: NextFunction
) => {
  // đường dẫn đến folder đang chạy
  // path.resolve('uploads'): đường dẫn dến thư mục lưu trữ
  // Tạo khung để khi người dùng gửi file lên thì ta sẽ dùng khung đó để kiểm tra (ép)
  // đã chuẩn bị xong form để kiểm tra các file rồi, giữ mình sẽ dùng form để kiểm tra req người dùng gửi lên
  const urlImage = await mediaServices.handleUploadImage(req)
  res.status(HTTP_STATUS.OK).json({
    message: 'Upload file successfully',
    urlImage
  })
}
