import { DataBase } from '@/server/models'
import { RequestHandler } from 'express'

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: 全ユーザーを配列に格納して返却する
 *     tags:
 *       - [User]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
export const getUserController: RequestHandler = async (req, res) => {
  const db = new DataBase()
  const data = await db.getUserList()
  console.log(data)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(data))
  res.end()
}
