import express from 'express'
import userRouter from './routes/users.routers'
import databaseServices from './services/database.services'

// Dựng server
const app = express()
const PORT = 2020

console.log(new Date(2004, 8, 9).toISOString())

// Kết nối db
databaseServices.connect()

// Cho server chạy middlewares chuyển JSON
app.use(express.json())

app.use('/users', userRouter)

// Xử lý lỗi tổng
userRouter.use((err, req, res, next) => {
  res.status(400).json({ message: err.message })
})

// Cho server ở PORT 2020
// localhost:2020/users/login
app.listen(PORT, () => {
  console.log('Server BE đang chạy trên PORT ' + PORT)
})
