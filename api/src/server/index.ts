import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import userRouter from './routes/user'
import { PORT } from '@/constants/env'
import { SWAGGER_URI, SWAGGER_OPTION } from '@/constants/swagger'

export class ApiServer {
  private app: Express

  constructor() {
    this.app = express()
    this.init()
  }

  private init(): void {
    this.useMiddleware()
    this.listen()
  }

  private useMiddleware(): void {
    this.app.use(express.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(
      cors({
        // origin: 'http://localhost:4000', //アクセス許可するオリジン
        // credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
        // optionsSuccessStatus: 200, //レスポンスstatusを200に設定
      }),
    )
    this.app.use(
      SWAGGER_URI,
      swaggerUi.serve,
      swaggerUi.setup(swaggerJSDoc(SWAGGER_OPTION)),
    )
    this.app.use('/api/user', userRouter)
  }

  private listen(): void {
    this.app.listen(PORT)
  }
}
