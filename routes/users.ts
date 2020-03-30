var express = require('express');
var router = express.Router();
import {Request, Response, NextFunction} from 'express'

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a 11111');
})

module.exports = router;
