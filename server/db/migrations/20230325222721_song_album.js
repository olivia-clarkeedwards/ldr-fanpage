exports.up = function (knex) {
  return knex.schema.createTable('song_album', (table) => {
    table.increments('id').primary()
    table.integer('song_id')
    table.integer('album_id')
    table.date('release_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('song_album')
}
