import { Response } from 'express'
import httpStatus from 'http-status'

const defaultError = (res: Response, msg?: string) => {
  let result = { 'result': false }
  if (msg) {
    const data = { 'data': msg }
    result = Object.assign(result, data)
  }

  return res.status(400).json(result)
}

const response = (res: Response, data?: object, code: any = httpStatus.OK) => {
  let result = { 'result': true }

  if (typeof data === 'object') {
    result = Object.assign(result, { 'data': data })
  }

  return res.status(code)
    .json(result)
}

export { defaultError, response }