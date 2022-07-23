import { Router } from 'express'
import {
  addUserController,
  deleteUserController,
  updateUserController,
  getUserController,
} from './controller'

const router = Router()
const API_USER_URI = "/"

/**
 * /user
 */
router.post(API_USER_URI, addUserController)
router.delete(API_USER_URI, deleteUserController)
router.put(API_USER_URI, updateUserController)
router.get(API_USER_URI, getUserController)

export default router
