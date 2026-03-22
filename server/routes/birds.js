import express from 'express'
import { getAllBirds, addBird } from '../db/index.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const birds = await getAllBirds()
    res.json(birds)
  } catch (err) {
    res.status(500).json({ message: 'Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, scientific_name } = req.body

    if (!name || !scientific_name) {
      return res.status(400).json({
        message: 'name and scientific_name are required',
      })
    }

    const bird = await addBird({ name, scientific_name })
    res.status(201).json(bird)
  } catch (err) {
    res.status(500).json({ message: 'Error' })
  }
})

export default router
