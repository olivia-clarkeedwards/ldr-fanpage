exports.up = function (knex) {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id').primary()
    table.string('album_title')
    table.integer('release_year')
    table.string('producer')
    table.text('tracklist')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('albums')
}
