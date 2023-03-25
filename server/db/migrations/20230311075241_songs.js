exports.up = function (knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id').primary()
    table.string('song_title')
    table.text('lyrics')
    table.boolean('released_as_single')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('songs')
}
