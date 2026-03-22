import request from 'superagent'

export async function fetchBirdFact() {
  const res = await request.get('https://api.adviceslip.com/advice')
  return res.body
}
