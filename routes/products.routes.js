import {Router} from "express"
import {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getProduct
} from "../controllers/products.controller.js"

import fileUpload from "express-fileupload"

const router = Router()

router.get('/products',getProducts)

router.post('/products',
            fileUpload({
                        useTempFiles: true,
                        tempFileDir: './uploads/'
                      })
            ,createProducts)

router.put('/products/:id',updateProducts)

router.delete('/products/:id',deleteProducts)

router.get('/products/:id',getProduct)

export default router
