
const Sequelize = require('sequelize');
const database = require('../db');
const Categoria = require('./categorias');

const Produto = database.define('Produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(),
        allowNull: false,
    },
    descricao : {
        type: Sequelize.TEXT,
    },
    preco: {
        type: Sequelize.DECIMAL(10,2)
    },
    id_categoria: {
        type: Sequelize.INTEGER(),
        references: {
            model: Categoria,
            key: "id"
        }
    },
    disponivel: {
        type: Sequelize.BOOLEAN(),
        allowNull: false
    }
});

module.exports = Produto;
