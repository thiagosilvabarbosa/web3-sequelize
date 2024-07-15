
const Sequelize = require('sequelize')
const database = require('../db')

const Cliente = database.define('Cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING(),
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
})

module.exports = Cliente
