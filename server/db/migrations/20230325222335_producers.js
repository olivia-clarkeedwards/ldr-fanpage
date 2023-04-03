exports.up = function (knex) {
  return knex.schema.createTable('producers', (table) => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('producers')
}
