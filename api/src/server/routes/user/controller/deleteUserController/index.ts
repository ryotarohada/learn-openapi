import { DataBase } from '@/server/models'
import { RequestHandler } from 'express'

/**
 * @swagger
 * /api/user:
 *   delete:
 *     description: ユーザーを削除する
 *     tags:
 *       - [User]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
export const deleteUserController: RequestHandler = async (req, res) => {
  const db = new DataBase()
  const data = await db.deleteUser(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(data))
  res.end()
}
