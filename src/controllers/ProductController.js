const connection = require('../database/connection') // importa a conexão com o banco de dados

module.exports = {
  /**
   * Listagem dos produtos
   * @param {*} req request 
   * @param {*} res response
   * @returns produtos no formato JSON
   */
  async index(req, res) {
    const products = await connection('products').select('*') // conecta com o bd e seleciona tudo
    const serializedProducts = products.map(product => { // "filtra" os produtos
      return{
        id: product.id,
        name: product.name,
        description: product.description
      }
    })

    return res.json(serializedProducts)
  },

  /**
   * Consulta de um produto pelo 'id'
   * @param {*} req request
   * @param {*} res response
   * @returns Caso exista, um único produto, caso não retorna um status 400 com uma mensagem de erro
   */
  async show(req, res) {
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
  async create(req, res) {
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