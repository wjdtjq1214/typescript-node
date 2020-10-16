import express from 'express'
import {Request, Response, NextFunction} from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a 11111')
})

export default router