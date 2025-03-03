import express from 'express'
import { ENUM_USER_ROLE } from '../../enums/users'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
const router = express.Router()

router.post(
  '/signup',
  // validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
)
router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
)
router.get('/', UserController.getAllUsers)
router.get('/email/:email', UserController.getUserByEmail)
router.get('/:id', UserController.getSingleUser)
router.delete('/:id', UserController.deleteUser)

export default router

//everything is okay
