const Product = require('../models/Product');

exports.get = (req, res, next) => {
    Product.findAll({attributes: ['ProductName', 'UnitPrice','IsVegan']})
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(err);
        });
};

exports.find = (req, res, next) => {
    Product.findByPk(req.params.id).then(product => {
        res.json(product)
        }
    )
}