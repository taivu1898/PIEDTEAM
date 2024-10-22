import express from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'

// Làm route
const userRouter = express.Router()

// users/login
userRouter.post('/login', loginValidator, loginController)

userRouter.post('/register', registerController)
export default userRouter
