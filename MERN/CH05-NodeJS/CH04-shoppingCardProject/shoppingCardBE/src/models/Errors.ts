import HTTP_STATUS from '~/constants/htppStatus'
import { USERS_MESSAGES } from '~/constants/messages'

// Định nghĩa một loại lỗi mới
export class ErrorWithStatus {
  message: string
  status: number
  constructor({ message, status }: { message: string; status: number }) {
    this.message = message
    this.status = status
  }
}

//đầu file
//tạo kiểu lỗi giống thiết kế ban đâu
type ErrorsType = Record<
  string,
  {
    msg: string
    [key: string]: any //này nghĩa ra ngoài ra muốn thêm vào gì thì thêm
  }
>
// { [key: string]:  {
//     [field: string]:{
//         msg: string
//     }
// }
//}

export class EntityError extends ErrorWithStatus {
  errors: ErrorsType
  //truyển message mặt định
  constructor({ message = USERS_MESSAGES.VALIDATION_ERROR, errors }: { message?: string; errors: ErrorsType }) {
    super({ message, status: HTTP_STATUS.UNPROCESSABLE_ENTITY }) //tạo lỗi có status 422
    this.errors = errors
  }
}
