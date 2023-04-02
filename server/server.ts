import { join } from 'node:path'
import express from 'express'
import userRoutes from './routes/userRoutes'
import songRoutes from './routes/songRoutes'
import albumRoutes from './routes/albumRoutes'

/*
 * create the server
 *************************/

const server = express()

/*
 * configure the server
 *************************/

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

/*
 * define the routes
 *************************/

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/songs', songRoutes)
server.use('/api/v1/albums', albumRoutes)

/*
 * re-route to client-side
 *************************/

server.get('*', (request, response) => {
  response.sendFile(join(__dirname, '/public/index.html'))
})

export default server
