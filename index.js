const express=require('./config/server');
const productApi=require('./routes/productApi');
express.use(productApi);

const orderApi=require('./routes/orderApi');
express.use(orderApi);

const customerApi=require('./routes/customerApi');
express.use(customerApi);