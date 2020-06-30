const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const products = await connection('products').select('*')
    const serializedProducts = products.map(product => {
      return{
        id: product.id,
        name: product.name,
        description: product.description
      }
    })

    return res.json(serializedProducts)
  },

  async show(req, res) {
    const product = await connection('products').where(id, req.params.id).first()

    if (!product) {
      return res.status(400).send('product not found')
    }

    return res.json({
      name: product.name,
      description: product.description,
      price: product.price
    })
  },

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