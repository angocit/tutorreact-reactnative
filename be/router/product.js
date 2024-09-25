import express from 'express';
import {AddProduct, GetAllProduct,GetProductById,UpdateProduct,DeleteProduct} from '../controllers/product.js'
const router = express.Router();
router.get('/products',GetAllProduct)
router.get('/products/:id',GetProductById)
router.post('/products',AddProduct)
router.put('/products/:id',UpdateProduct)
router.delete('/products/:id',DeleteProduct)
export default router