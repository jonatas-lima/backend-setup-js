const connection = require('../database/connection') // importa a conexão com o banco de dados

function getProducts() {
  const prod = await connection('products').select('*')
  return prod
}

function serializeProducts(products) {
  return products.map(prod => {
    return {
      id: prod.id,
      name: prod.name,
      description: prod.description,
      price: prod.price
    }
  })
}

module.exports = {
  /**
   * Listagem dos produtos
   * @param {*} req request 
   * @param {*} res response
   * @returns produtos no formato JSON
   */
  async getAllProducts(req, res) {
    const products = getProducts()
    const serializedProd = serializeProducts(products)

    return res.json(serializedProd)
  },

  /**
   * Consulta de um produto pelo 'id'
   * @param {*} req request
   * @param {*} res response
   * @returns Caso exista, um único produto, caso não retorna um status 400 com uma mensagem de erro
   */
  async getProductById(req, res) {
    const product = await connection('products').where('id', req.params.id).first()

    if (!product) {
      return res.status(400).send('product not found')
    }

    return res.json({
      name: product.name,
      description: product.description,
      price: product.price
    })
  },

  /**
   * Cadastra um produto no banco de dados
   * @param {*} req request 
   * @param {*} res response
   * @returns Produto cadastrado no formato JSON
   */
  async createProduct(req, res) {
    const {
      name,
      description,
      price
    } = req.body

    const trx = await connection.transaction()

    const product = {
      name,
      description,
      price
    }

    const insertedIds = await trx('products').insert(product)
    const prod_id = insertedIds[0]

    await trx.commit()

    return res.json({
      id: prod_id,
      ...product
    })
  }
}

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Pamâmetros nomeados enviados na rota após o símobolo '?' (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */