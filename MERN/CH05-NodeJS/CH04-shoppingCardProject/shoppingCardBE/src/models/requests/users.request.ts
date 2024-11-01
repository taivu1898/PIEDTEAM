//file lưu các định nghĩa về request
export interface RegisterRequestBody {
  name: string
  email: string
  password: string
  confirmed_password: string
  date_of_birth: string
}

export interface LoginReqBody {
  email: string
  password: string
}
