import express from "express"
const router = express.Router()


import {getAllProductsStatic, getAllProducts} from '../controllers/products.js'

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)


export default router