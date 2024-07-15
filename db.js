const Sequelize = require('sequelize');

const sequelize = new Sequelize('web3projeto3', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
  });
  
  module.exports = sequelize;