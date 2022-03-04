const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const OrderItem = sequelize.define('Order', {
    OrderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ProductId: Sequelize.STRING,
    UnitPrice: {
        type: Sequelize.DECIMAL(12, 2),
    },
    Quantity: Sequelize.STRING,
});

module.exports = OrderItem;
