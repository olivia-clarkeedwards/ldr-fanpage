exports.up = function (knex) {
  return knex.schema.createTable('song_producer', (table) => {
    table.increments('id').primary()
    table.integer('song_id')
    table.integer('producer_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('song_producer')
}
