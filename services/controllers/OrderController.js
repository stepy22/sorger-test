/**
 * Import models
 * @type {{}}
 */
const Order = require('../models/Order');
const Product = require('../models/Product');
const OrderItem = require('../models/OrderItem');

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
 * @param id primary_key
 * @returns {Promise<*>}
 */

async function productInfo(id){
        const product = await Product.findByPk(id, {attributes: ['UnitPrice','IsVegan']})
        return product;
}

/**
 *
 * @param req, express request object
 * @returns {Promise<number>}
 */
async function totalAmount(req){
    let orders=JSON.parse(req.query.order);
    let total_amount=0;
    for(let i=0;i<orders.length;i++){
        const product=await productInfo(orders[i].product_id);
        total_amount+=parseInt(orders[i].qty)*product.UnitPrice;
    }
    return total_amount;
}

/**
 *
 * @param req, express request object
 * @param res, express results object
 * @param next
 * @returns {Promise<void>}
 */
exports.create = async (req, res, next) => {
    const lastRecordRes = await lastRecord(res);
    const productAmount=await totalAmount(req);
    const orderCreated = await Order.create({
        OrderNumber: parseInt(lastRecordRes.OrderNumber)+1,
        CustomerId: req.query.CustomerId,
        TotalAmount: productAmount,
        is_vegan:0
    });
    let orders=JSON.parse(req.query.order);

    for (var i=0;i<orders.length;i++){
        let product=await productInfo(orders[i].product_id);
        if(product.IsVegan){
            orderCreated.is_vegan=1;
            await orderCreated.save();
        }
        let orderItemCreated=await OrderItem.create({
            OrderId:orderCreated.id,
            ProductId:orders[i].product_id,
            UnitPrice:product.UnitPrice,
            Quantity:orders[i].qty
        })
    }

    orderCreated ? res.send(orderCreated) : res.status(500).send('Error in insert new record')
}
/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.get = async (req, res, next) => {
    var orders = await Order.findAll({attributes: ['id','OrderNumber', 'CustomerId', 'OrderDate','TotalAmount','fullfilled','is_vegan','items']});



    if(req.query.is_vegan == 1) {
        orders = orders.filter(function (item) {
            return item.is_vegan == 1;
        });
    }

    if(req.query.date) {
        orders = orders.filter(function (item) {
            console.log(item)
            return item.OrderDate == req.query.date;
        });
    }

    for(let i=0;i<orders.length;i++) {
        orders[i]['items'] = await OrderItem.findAll({
            where: {
                OrderId: orders[i].id
            }
        });
    }
    res.json(orders)
};


