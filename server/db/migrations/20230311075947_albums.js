exports.up = function (knex) {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id').primary()
    table.string('album_title')
    table.integer('number_of_tracks')
    table.string('duration_mins')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('albums')
}
