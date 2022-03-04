const express = require('express')
const router = express.Router();

const ProductController = require('../services/controllers/ProductController');


router.get('/products', ProductController.get);
router.get('/product/:id', ProductController.find);


module.exports=router;