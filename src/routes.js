const express = require('express')
const ProductController = require('./controllers/ProductController')

const routes = express.Router()

routes.get('/', ProductController.getAllProducts)
routes.get('/:id', ProductController.getProductById)
routes.post('/', ProductController.createProduct)

module.exports = routes

/* 
>>> PRINCIPAIS MÉTODOS HTTP:
1- GET: Requisição de dados (retorna apenas dados)
2- POST: Cria um novo dado
3- PUT: Modifica um dado
4- DELETE: Deleta um dado
*/