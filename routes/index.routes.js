import { Router} from "express"

const router = Router()

// routes
router.get('/',(req,res)=>{
    res.send('Hello word mother fuker')
})

export default router