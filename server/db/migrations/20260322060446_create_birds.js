export async function up(knex) {
  await knex.schema.createTable('birds', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('scientific_name')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('birds')
}
