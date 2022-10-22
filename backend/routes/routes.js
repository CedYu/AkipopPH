import { Router } from "express";
import user_functions from "../user_functions.js";
import func from '../controllers/func.js'



const router = Router()

router.get('/Pain', user_functions.func)
router.get('/e', func.func)

export default router