import express from 'express'
import {
  forgotPasswordController,
  loginController,
  logoutController,
  registerController,
  resendEmailVerifyController,
  verifyEmailController
} from '~/controllers/users.controller'
import {
  accTokenValidator,
  forgotPasswordValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  verifyEmailTokenValidator
} from '~/middlewares/users.middlewares'
import { wrapAsync } from '~/utils/handlers'
// tạo user route
const userRouter = express.Router()

userRouter.post('/register', registerValidator, wrapAsync(registerController))

/*
    desc: login
    path: users/login
    method: post
    body:{
        mail: string,
        password: string
    }
*/

// localhost:3000/users/login
userRouter.post('/login', loginValidator, wrapAsync(loginController))

/*
    desc: logout
    path: users/logout
    method: post
    headers: {
        Authoriation: 'Bearer <access_token>'
    }
    body: {
        refresh_token
    }
*/

userRouter.post('/logout', accTokenValidator, refreshTokenValidator, wrapAsync(logoutController))

//desc: verify-email: khi người dùng vào email và bấm vào link dể verify email
//họ sẽ gửi email_verify_token lên cho mình thông qua query
//path: users/verify-email/?email_verify_token=string
//method: get

userRouter.get('/verify-email/', verifyEmailTokenValidator, wrapAsync(verifyEmailController))

// desc: resend email verify
// path: users/resend-verify-email
// chức năng này cần đăng nhập để sử dụng
// method: post
// header: {
//   Authorization: 'Bearer <access_token>'
// }

userRouter.post('/resend-verify-email', accTokenValidator, wrapAsync(resendEmailVerifyController))

// desc: forgot-password
// khi mà ta bị quên mk thì ta sẽ không đăng nhập được
// thứ duy nhất mà ta có thể cung cấp cho server là email
// path: users/forgot-password
// method: post
// body: {
//     email: string
// }

userRouter.post('/forgot-password', forgotPasswordValidator, wrapAsync(forgotPasswordController))

export default userRouter
