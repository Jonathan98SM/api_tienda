import {Router} from "express"
import {login,
        registro
} from "../controllers/auth.controller.js"

const router = Router()

// routes
router.post('/register',registro)

router.post('/login',login)

export default router