import { Request, Response, NextFunction } from 'express'
import { response, defaultError } from '../utils/response'

// 사용자 생성
const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      response(res)
    } catch (e) {
      defaultError(res, e)
    }
  }
  
  // 사용자 수정
  const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      response(res)
    } catch (e) {
      defaultError(res, e)
    }
  }
  
  // 사용자 삭제
  const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      response(res)
    } catch (e) {
      defaultError(res, e)
    }
  }

  const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      response(res)
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