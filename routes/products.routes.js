import {Router} from "express"
import {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getProduct
} from "../controllers/products.controller.js"
import isAuthenticated from '../auth/index.js'

import fileUpload from "express-fileupload"

const router = Router()

router.get('/products',getProducts)

router.post('/products',isAuthenticated,
            fileUpload({
                        useTempFiles: true,
                        tempFileDir: './uploads/'
                      })
            ,createProducts)

router.put('/products/:id',isAuthenticated,updateProducts)

router.delete('/products/:id',isAuthenticated,deleteProducts)

router.get('/products/:id',getProduct)

export default router
