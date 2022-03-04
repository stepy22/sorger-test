/**
 * Import models
 * @type {{}}
 */
const Order = require('../models/Order');
const Product = require('../models/Product');

/**
 * lastRecord
 * @param res
 * @returns {Promise<*>}
 */
async function lastRecord(res) {
    const last = await Order.findOne({
        order: [['OrderDate', 'DESC']],
    })
    return last;
}

/**
 *
 * @param id
 * @returns {Promise<*>}
 */

async function amount(id){
        const product = await Product.findByPk(id, {attributes: ['UnitPrice']})
        return product;
}

async function totalAmount(req){
    let orders=JSON.parse(req.query.order);
    let total_amount=0;
    for(let i=0;i<orders.length;i++){
        const product=await amount(orders[i].product_id);
        total_amount+=parseInt(orders[i].qty)*product.UnitPrice;
    }
    return total_amount;
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.create = async (req, res, next) => {
    const lastRecordRes = await lastRecord(res);
    const amount=await totalAmount(req);
    const userCreated = await Order.create({
        OrderNumber: parseInt(lastRecordRes.OrderNumber)+1,
        CustomerId: req.query.CustomerId,
        TotalAmount: amount,
    });
    console.log(userCreated)

    userCreated ? res.send(userCreated) : res.status(500).send('Error in insert new record')
}
