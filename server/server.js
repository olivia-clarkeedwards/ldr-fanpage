const { join } = require('node:path')
const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/userRoutes')
const songRoutes = require('./routes/songRoutes')
const albumRoutes = require('./routes/albumRoutes')

/*
 * create the server
 *************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', join(__dirname, 'views'))

/*
 * define the routes
 *************************/

server.get('/', (req, res) => {
  res.send('Welcome to LDR fan base')
})

server.use('/user', userRoutes)
server.use('/songs', songRoutes)
server.use('/albums', albumRoutes)
