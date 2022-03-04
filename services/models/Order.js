const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const Order = sequelize.define('Order', {
    OrderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    OrderNumber: Sequelize.STRING,
    CustomerId: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    OrderDate: {
        type: Sequelize.DATE,
    },
    TotalAmount: {
        type: Sequelize.DECIMAL(12, 2),
    },
    Fullfilled: Sequelize.BOOLEAN,
},{
    timestamps: false
});

module.exports = Order;
