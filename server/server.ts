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

server.use('/user', userRoutes)
server.use('/songs', songRoutes)
server.use('/albums', albumRoutes)

/*
 * re-route to client-side
 *************************/

server.get('*', (request, response) => {
  response.sendFile(join(__dirname, '/public/index.html'))
})

export default server
