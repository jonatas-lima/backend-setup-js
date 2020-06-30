exports.up = function up(knex) {
  return knex.schema.createTable('products', product => {
    product.increments('id').primary()
    product.string('name').notNullable()
    product.string('description').notNullable()
    product.decimal('price').notNullable()
  })
}

exports.down = function down(knex) {
  return knex.schema.dropTable('product')
}