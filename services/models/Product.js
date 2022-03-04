const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const Product = sequelize.define('Product', {
    ProductId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ProductName: Sequelize.STRING,
    UnitPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    IsVegan: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
});

module.exports = Product;
