import express from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapAsync } from '~/utils/handlers'

//tạo userRoute
const userRouter = express.Router()

/*
    description: Register a new user
    path: /register
    method: POST
    body: {
        name: string,
        email: string,
        password: string,
        confirm_password: string,
        date_of_birth: string nhưng có dạng ISO8601
    }
 */
userRouter.post('/register', registerValidator, wrapAsync(registerController))

/*
    description: Login
    path: /login
    method: POST
    body: {
        email: string,
        password: string
    }
*/
userRouter.post('/login', loginValidator, wrapAsync(loginController))
export default userRouter
