const knex = require('knex')
const path = require('path')

// configuração do knex
const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'db.sqlite')
  },
  useNullAsDefault: true
})

module.exports = connection