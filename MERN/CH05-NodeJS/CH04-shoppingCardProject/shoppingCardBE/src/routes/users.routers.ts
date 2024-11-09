import express, { Request, Response } from 'express'
import {
  forgotPasswordController,
  getMeController,
  loginController,
  logoutController,
  registerController,
  resendEmailVerifyController,
  resetPasswordController,
  updateMeController,
  verifyEmailController,
  verifyForgotPasswordTokenController
} from '~/controllers/users.controller'
import {
  accTokenValidator,
  emailVerifyTokenValidator,
  forgotPasswordTokenValidator,
  forgotPasswordValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  resetPasswordValidator,
  updateMeValidator
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

/*
    desc: verify email => khi người dùng bấm vào link trong email
    thì họ sẽ gửi email_verify_token thông qua query
    để mình kiểm tra, vậy thì trong query sẽ có cái token đó
    mình sẽ verify và lưu payload vào decode_email_verify_token
    tạo ac và rf cho em đăng nhập  (options)

    path: users/verify-email/?memail-verify_token = string
    method: get
*/
userRouter.get('/verify-email', emailVerifyTokenValidator, wrapAsync(verifyEmailController))

/*
    desc: gửi lại link verify email khi người dùng nhấn gửi lại email
    path: users/resend/verify-email
    method: post
    headers: (Authorization: "bearer <access_token")
*/

userRouter.post('/resend-verify-email', accTokenValidator, wrapAsync(resendEmailVerifyController))

/*
    desc: thông báo bị quên mật khẩu, yêu cầu lấy lại
    server kiểm tra email có tồn tại trong hệ thống không
    gửi link khôi phục account qua email cho người dùng

    gửi lên email
    path: /users/forgot-password
    body: {email: string}
*/
userRouter.post('/forgot-password', forgotPasswordValidator, wrapAsync(forgotPasswordController))

/*
    desc: verity forgot password token to reset password
    kiểm tra xem forgot password token còn đúng và còn hiệu lực không
    path: users/verify-forgot-password
    method: post
    body: {
    forgot_password_token: string
    }
*/
userRouter.post(
  '/verify-forgot-password',
  forgotPasswordTokenValidator, // kiểm tra forgotPasswordToken
  wrapAsync(verifyForgotPasswordTokenController) // thông báo
)
/*
    desc: reset password
    path: user/verify-forgot-password
    method: post
    body:{
        password: string,

        confirm_password: string,
        forgot_password_token: string
    }
*/
userRouter.post(
  '/reset-password',
  forgotPasswordTokenValidator,
  resetPasswordValidator, // kiểm tra pasword, confirm_password, forgot_password_token
  wrapAsync(resetPasswordController)
)

/*
    desc: get my profile
    path: user/me
    method: post
    headers:{
    authorization: 'Bearer<access_token>'
    }
*/

userRouter.post('/me', accTokenValidator, wrapAsync(getMeController))

/*
des: update profile của user
path: '/me'
method: patch
Header: {Authorization: Bearer <access_token>}
body: {
  name?: string
  date_of_birth?: Date
  bio?: string // optional
  location?: string // optional
  website?: string // optional
  username?: string // optional
  avatar?: string // optional
  cover_photo?: string // optional}
*/

userRouter.patch('/me', accTokenValidator, updateMeValidator, wrapAsync(updateMeController))

export default userRouter
