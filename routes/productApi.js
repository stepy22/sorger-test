const express = require('express')
const router = express.Router();

const ProductController = require('../services/controllers/ProductController');


router.get('/products', ProductController.getProducts);


module.exports=router;