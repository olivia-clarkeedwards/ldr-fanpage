exports.up = function (knex) {
  return knex.schema.createTable('themes', (table) => {
    table.increments('id').primary()
    table.string('theme_name')
    table.string('primary_colour')
    table.string('secondary_colour')
    table.string('text_color')
    table.string('font')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('themes')
}
