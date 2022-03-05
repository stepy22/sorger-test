const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const Customer = sequelize.define('Cutomer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    CustomerName: Sequelize.STRING,
    Phone: Sequelize.STRING,
});

module.exports = Customer;
