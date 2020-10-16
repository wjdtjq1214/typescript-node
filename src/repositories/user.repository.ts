import { pgp, db } from '../config/db'

class UserRepo {
  // 사용자 생성
  async createUser (userObj: any) {
    const result = await db.oneOrNone(pgp.helpers.insert(userObj, undefined, 'user') + ' RETURNING *')
    return result
  }

  // 사용자 수정
  async updateUser (userObj: any, userId: string) {
    const result = await db.oneOrNone(pgp.helpers.update(userObj, undefined, 'user') + ` WHERE "id" = '${ userId }' RETURNING *`)
    return result
  }

  // 사용자 삭제
  async deleteUser (userId: string) {
    const result = await db.none(`DELETE FROM "user" WHERE "id" = '${ userId }'`)
    return result
  }

  // 사용자 조회
  async getUser (userId: string) {
    const result = await db.oneOrNone(`SELECT * FROM "user" WHERE "id" = ${userId}`)
    return result
  }
}

export {UserRepo}