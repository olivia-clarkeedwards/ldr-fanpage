exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('user_name')
    table.string('first_name')
    table.string('last_name')
    table.date('date_of_birth')
    table.integer('theme_id')
    table.integer('fave_album_id')
    table.integer('fave_song_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
