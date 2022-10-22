import { Router } from "express";
import functions from "../functions.js"


const router = Router()

router.get('/Pain', functions.Pain)

export default router