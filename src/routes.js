const express = require('express')
const ProductController = require('./controllers/ProductController')

const routes = express.Router()

routes.get('/', ProductController.index)
routes.get('/:id', ProductController.show)
routes.post('/', ProductController.create)

module.exports = routes

/* 
>>> PRINCIPAIS MÉTODOS HTTP:
1- GET: Requisição de dados (retorna apenas dados)
2- POST: Cria um novo dado
3- PUT: Modifica um dado
4- DELETE: Deleta um dado
*/