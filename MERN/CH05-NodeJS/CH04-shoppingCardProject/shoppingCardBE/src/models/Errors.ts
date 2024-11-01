// dựa trên dạng lỗi bth {stack, message}
// ta sẽ tạo ra 1 loại lỗi mới {status, message}

import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'

export class ErrorWithStatus {
  message: string
  status: number
  constructor({ message, status }: { message: string; status: number }) {
    this.message = message
    this.status = status
  }
}

//tạo kiểu lỗi
type ErrorType = Record<
  string,
  {
    msg: string
    [key: string]: any
  }
>
/*
{
  key:string: {
    msg: string
    msg1: string
    msg2: string
  }
}
*/

export class EntityError extends ErrorWithStatus {
  //từ có status và message
  errors: ErrorType
  constructor({ message = USERS_MESSAGES.VALIDATION_ERROR, errors }: { message?: string; errors: ErrorType }) {
    super({ message, status: HTTP_STATUS.UNPROCESSABLE_ENTITY })
    this.errors = errors
  }
}
