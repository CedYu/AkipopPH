import { Router } from "express";
import userFunc from '../controllers/userFunc.js'


const router = Router()

router.get('/', userFunc.func)
router.get('/Pain', userFunc.Pain)

export default router