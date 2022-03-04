const express = require('express')
const router = express.Router();

const OrderController = require('../services/controllers/OrderController');


router.post('/order/create', OrderController.create);


module.exports=router;