import { Router } from "express";
import userFunc from '../controllers/userFunc.js'
import testdb from "../controllers/testdb.js"


const router = Router()

router.get('/', userFunc.func)
router.get('/Pain', userFunc.Pain)

router.post('/register', userFunc.Register)


router.post('/a', userFunc.CheckUsername)
router.post('/b', userFunc.CheckEmail)


router.post('/test', testdb.dbConnect)

export default router