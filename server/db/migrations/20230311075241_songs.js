/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id').primary()
    table.string('song_title')
    table.text('lyrics')
    table.integer('album_id')
    table.boolean('released_as_single')
    table.string('producer')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('songs')
}
