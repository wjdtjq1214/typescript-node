import { Request, Response, NextFunction } from 'express'
import { response, defaultError } from '../utils/response'
import { UserRepo } from '../repositories/user.repository'

// 사용자 생성
const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id
      const pass = req.body.pass
      const userObj = {
          'id': id,
          'pass': pass
      }

      const userRepo = new UserRepo()

      const createdUserObj = await userRepo.createUser(userObj)

      response(res, createdUserObj)
    } catch (e) {
      defaultError(res, e)
    }
  }
  
  // 사용자 수정
  const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id
      const pass = req.body.pass
      const userObj = {
        'id': id,
        'pass': pass
      }

      const userRepo = new UserRepo()

      const updatedUserObj = await userRepo.updateUser(userObj, id)

      response(res, updatedUserObj)
    } catch (e) {
      defaultError(res, e)
    }
  }
  
  // 사용자 삭제
  const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id

      const userRepo = new UserRepo()

      await userRepo.deleteUser(id)

      response(res)
    } catch (e) {
      defaultError(res, e)
    }
  }

  // 사용자 조회
  const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id

      const userRepo = new UserRepo()

      const userObj = await userRepo.getUser(id)

      response(res, userObj)
    } catch (e) {
      defaultError(res, e)
    }
  }
  

export {
  getUser,
  updateUser,
  deleteUser,
  createUser
}