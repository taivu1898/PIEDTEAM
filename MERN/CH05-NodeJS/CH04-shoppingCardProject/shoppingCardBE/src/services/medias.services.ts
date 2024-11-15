import { Request } from 'express'
import sharp from 'sharp'
import { UPLOAD_DIR } from '~/constants/dir'
import { getNameFromFullnameFile, handleUploadImage } from '~/utils/file'
import fs from 'fs'
import { MediaType } from '~/constants/enums'
import { Media } from '~/models/other'

class MediaService {
  async handleUploadImage(req: Request) {
    const files = await handleUploadImage(req)
    const result = Promise.all(
      files.map(async (file) => {
        const newFilename = getNameFromFullnameFile(file.newFilename) + '.jpg'
        const newPath = UPLOAD_DIR + '/' + newFilename
        const infor = await sharp(file.filepath).jpeg().toFile(newPath)
        // Xóa bức hình trong thư mục tạm
        fs.unlinkSync(file.filepath)
        const urlImage: Media = { url: `http://localhost:3000/static/image/${newFilename}`, type: MediaType.Image }
        return urlImage
      })
    )
    return result
  }
}

const mediaServices = new MediaService()
export default mediaServices
