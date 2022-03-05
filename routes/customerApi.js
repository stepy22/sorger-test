const express = require('express')
const router = express.Router();

const CustomerInfoController = require('../services/controllers/CustomerInfoController');

router.get('/get-top-spender', CustomerInfoController.topFiveSpenders);

module.exports=router;

