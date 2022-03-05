const Sequelize = require('sequelize');
const moment = require('moment');
const sequelize = require('../../config/database');

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    OrderNumber: Sequelize.STRING,
    is_vegan: Sequelize.INTEGER,
    CustomerId: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    items: {
        type: Sequelize.VIRTUAL,
    },
    OrderDate: {
        type: Sequelize.DATEONLY,
        defaultValue: moment.utc().format('YYYY-MM-DD'),

    },
    TotalAmount: {
        type: Sequelize.DECIMAL(12, 2),
    },
    Fullfilled: Sequelize.BOOLEAN,
},{
    timestamps: false
});

module.exports = Order;
