const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.send(products)
        })
        .catch(err => {
            console.log(err);
        });
};