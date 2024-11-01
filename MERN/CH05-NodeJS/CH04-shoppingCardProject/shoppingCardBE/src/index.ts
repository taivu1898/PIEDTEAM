import express from 'express'
import userRouter from './routes/users.routers'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'

console.log(new Date(2004, 1, 1).toISOString())

//dựng server
const app = express()
const PORT = 3000
//call server mongo chạy
databaseService.connect()
app.use(express.json()) //cho server xài middleware biến đổi json
//cho server kết nối userRouter
app.use('/users', userRouter)

app.use(defaultErrorHandler)
//Cho server mở port ở 3000
// http://localhost:3000/users/login body{email, password}
app.listen(PORT, () => {
  console.log('Server BE đang chạy trên port: ' + PORT)
})
