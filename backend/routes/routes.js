import { Router } from "express";
import userFunc from '../controllers/userFunc.js'
import testdb from "../controllers/testdb.js"
import sellerFunc from "../controllers/sellerFunc.js";


const router = Router()

router.get('/', userFunc.running)

router.post('/register', userFunc.Register)
router.post('/login', userFunc.Login)
router.post('/logout', userFunc.Logout)

router.post('/addproduct', sellerFunc.AddItem)

router.post('/checkUsername', userFunc.CheckUsername)
router.post('/checkEmail', userFunc.CheckEmail)

router.post('/test', testdb.dbConnect) // Playground

export default router