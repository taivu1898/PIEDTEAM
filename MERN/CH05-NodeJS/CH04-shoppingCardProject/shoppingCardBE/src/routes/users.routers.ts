import express from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'

// Làm route
const userRouter = express.Router()

// users/login
userRouter.post('/login', loginValidator, loginController)

// desc: Register a new user
// path: /register
// method: post
// body: {
//   name: string,
//   email: string,
//   password: string,
//   confirm_password: string,
//   data_of_birth: string nhưng có dạng ISO8601
// }

userRouter.post('/register', registerValidator, registerController)

export default userRouter
