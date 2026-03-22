export async function seed(knex) {
  await knex('birds').del()

  await knex('birds').insert([
    { id: 1, name: 'Tui', scientific_name: 'Prosthemadera novaeseelandiae' },
    { id: 2, name: 'Kea', scientific_name: 'Nestor notabilis' },
    { id: 3, name: 'Kereru', scientific_name: 'Hemiphaga novaeseelandiae' },
  ])
}
