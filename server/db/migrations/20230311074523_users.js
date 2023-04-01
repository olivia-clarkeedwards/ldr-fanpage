exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('firstname')
    table.string('lastname')
    table.date('dateofbirth')
    table.integer('theme_id')
    table.integer('album_id')
    table.integer('song_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
