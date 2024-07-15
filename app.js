const Sequelize = require('sequelize');
const database = require('./db');
const pedidos = require('./model/pedidos');
const produto = require('./model/produtos');
const categoria = require('./model/categorias')
const clientes = require('./model/clientes')
const itens_pedidos = require('./model/itensPedidos')

database.authenticate()
.then(() => {
console.log('Conexão bem-sucedida com o banco de dados.');
})
.catch(err => {
console.error('Erro ao conectar ao banco de dados:', err);
});

database.sync()
.then(()=> {
    console.log('tabelas criadas')
})