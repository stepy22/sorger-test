const Order = require('../models/Order');
const Customer = require('../models/Customer');
const Sequelize = require('sequelize');

exports.topFiveSpenders = async (req, res, next) => {
    var orders = await Order.findAll({
        attributes: [
            'CustomerId',
            [Sequelize.fn('sum', Sequelize.col('TotalAmount')), 'TotalAmount'],
        ],
        group: ['CustomerId'],
        order: Sequelize.literal('TotalAmount DESC')

    });
    res.send(orders);
}