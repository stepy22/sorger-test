const express=require('./config/server');
const productApi=require('./routes/productApi');
express.use(productApi);