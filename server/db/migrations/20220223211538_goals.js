exports.up = function (knex) {
  return knex.schema.createTable('goals', (table) => {
    table.increments('id')
    table.string('details')
    table.boolean('completed')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('goals')
}
