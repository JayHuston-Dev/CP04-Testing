import express from 'express'
import birdsRoutes from './routes/birds.js'

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Birds server running')
})

server.use('/api/v1/birds', birdsRoutes)

export default server

if (process.env.NODE_ENV !== 'test') {
  server.listen(3000, () => {
    console.log('Server running on port 3000')
  })
}
