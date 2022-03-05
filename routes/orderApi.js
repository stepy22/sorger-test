const express = require('express')
const router = express.Router();

const OrderController = require('../services/controllers/OrderController');


router.post('/order/create', OrderController.create);
router.get('/orders', OrderController.get);


module.exports=router;