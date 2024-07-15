
const Sequelize = require('sequelize');
const database = require('../db');
const pedidos = require('./pedidos');
const produto = require('./produtos');

const Itens_Pedidos = database.define("ItensPedidos", {
    id: {
        type: Sequelize.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_pedido: {
        type: Sequelize.INTEGER(),
        references: {
            model: pedidos,
            key: "id"
        },
        allowNull: false
    },
    id_produto: {
        type: Sequelize.INTEGER(),
        references: {
            model: produto,
            key: "id"
        },
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER(),
        allowNull: false,
    },
    preco_unitario: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
})



module.exports = Itens_Pedidos
