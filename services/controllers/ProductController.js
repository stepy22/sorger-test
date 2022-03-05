/**
 * import Models
 * @type {{}}
 */
const Order = require('../models/Order');
const Product = require('../models/Product');
const OrderItem = require('../models/OrderItem');

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


/**
 * delete product if product isnt in curent unfullifiled order
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.delete = async (req, res, next) => {
    const product = await Product.findByPk(req.params.id);
    const orderItems =await OrderItem.findAll({
        where: {
            ProductId: product.ProductId
        }
    });


    var isnt_fullfiled = 0;
    for (let i = 0; i < orderItems.length; i++) {
        let Order =await Order.findByPk(
            orderItems[i].OrderId
        );
        if (Order.fullfiled == null) {
            isnt_fullfiled = 1;
        }
    }
    if (!isnt_fullfiled) {
        product.destroy();
        res.status(200).send('success')
    } else {
        res.status(403).send('Cant be deleted')
    }

}