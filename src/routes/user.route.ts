import express from 'express'
import {
  getUser,
  updateUser,
  deleteUser,
  createUser
} from '../controllers/user.controller'
const router = express.Router()

router.route('/:userId')
  .get(
    getUser // 사용자 상세정보
  )
  .put(
    updateUser // 사용자 수정
  )
  .delete(
    deleteUser // 사용자 삭제
  )

router.route('')
  .post(
    createUser // 사용자 상세정보
  )

export default router