import express, { Router } from 'express'
import { UPLOAD_DIR } from '~/constants/dir'
import { serveImageController } from '~/controllers/static.controller'
const staticRouter = Router()

staticRouter.get('/image/:filename', serveImageController)
// :filename là param
export default staticRouter
