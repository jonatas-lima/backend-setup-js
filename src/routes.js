const express = require('express')
const ProductController = require('./controllers/ProductController')

const routes = express.Router()

routes.get('/', ProductController.index)
routes.get('/:id', ProductController.show)
routes.post('/', ProductController.create)

module.exports = routes