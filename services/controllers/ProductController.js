/**
 * import Models
 * @type {{}}
 */
const Product = require('../models/Product');


/**
 * Get
 * @param req
 * @param res
 * @param next
 */
exports.get = async (req, res, next) => {
    const products = await Product.findAll({attributes: ['ProductName', 'UnitPrice', 'IsVegan']})
    res.json(products)
};

/**
 * Get
 * @param req
 * @param res
 * @param next
 */
exports.find = async (req, res, next) => {
    const product = await Product.findByPk(req.params.id, {attributes: ['ProductName', 'UnitPrice', 'IsVegan']})
    res.json(product)
}