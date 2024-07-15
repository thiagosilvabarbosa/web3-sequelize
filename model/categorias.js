const Sequelize = require('sequelize')
const database = require('../db')


const Categoria = database.define('Categorias', {
    id: {
        type: Sequelize.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    descricao : {
        type: Sequelize.TEXT,
        
    }

})



module.exports = Categoria;