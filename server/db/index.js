import db from './connection.js'

export function getAllBirds() {
  return db('birds').select()
}

export async function addBird(bird) {
  const [id] = await db('birds').insert(bird)
  return db('birds').where({ id }).first()
}
