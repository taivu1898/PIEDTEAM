import express from 'express'
import userRouter from './routes/users.routers'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediaRouter from './routes/media.router'
import { initFolder } from './utils/file'
import staticRouter from './routes/static.routers'
// dựng server
const app = express()
const PORT = 3000
// call server chạy
databaseService.connect().catch()
initFolder()

app.use(express.json()) // cho server xài middleware biến đổi json

// cho server kết nối userRouter
app.use('/users', userRouter)
app.use('/medias', mediaRouter)
app.use('/static', staticRouter)
// http://localhost:3000/users/login body(email, password)
// cho server mở PORT ở 3000
app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log('server BE đang chạy trên PORT ' + PORT)
})
