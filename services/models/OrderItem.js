const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const OrderItem = sequelize.define('OrderItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    OrderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ProductId: Sequelize.STRING,
    UnitPrice: {
        type: Sequelize.DECIMAL(12, 2),
    },
    Quantity: Sequelize.STRING,
},{
    timestamps: false
});

module.exports = OrderItem;
