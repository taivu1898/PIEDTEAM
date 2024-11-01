import express from 'express'
import userRouter from './routes/users.routers'
import databaseServices from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'

// Dựng server
const app = express()
const PORT = 2020

console.log(new Date(2004, 8, 9).toISOString())

// Kết nối db
databaseServices.connect()

// Cho server chạy middlewares chuyển JSON
app.use(express.json())

app.use('/users', userRouter)
app.use(defaultErrorHandler)

// Cho server ở PORT 2020
// localhost:2020/users/login
app.listen(PORT, () => {
  console.log('Server BE đang chạy trên PORT ' + PORT)
})
