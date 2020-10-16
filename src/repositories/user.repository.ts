import { pgp, db } from '../config/db'

class UserRepo {
  /**
   * 사용자 생성
   * @description 사용자 생성
   * @param {userObj} userObj 추가할 사용자 정보 객체
   */
  async createUser (userObj: any) {
    const result = await db.oneOrNone(pgp.helpers.insert(userObj, undefined, 'user') + ' RETURNING *')
    return result
  }

  /**
   * 사용자 수정
   * @description 사용자 생성
   * @param {userObj} userObj 수정할 사용자 정보 객체
   * @param {string} userId 수정할 사용자의 아이디
   */
  async updateUser (userObj: any, userId: string) {
    const result = await db.oneOrNone(pgp.helpers.update(userObj, undefined, 'user') + ` WHERE "id" = '${ userId }' RETURNING *`)
    return result
  }

  /**
   * 사용자 삭제
   * @description 사용자 삭제
   * @param {string} userId 삭제할 사용자의 아이디
   */
  async deleteUser (userId: string) {
    const result = await db.none(`DELETE FROM "user" WHERE "id" = '${ userId }'`)
    return result
  }

  /**
   * 사용자 조회
   * @description 사용자 조회
   * @param {string} userId 조회할 사용자의 아이디
   */
  async getUser (userId: string) {
    const result = await db.oneOrNone(`SELECT * FROM "user" WHERE "id" = ${userId}`)
    return result
  }
}

export {UserRepo}