const express = require('express')
const path = require('path')
const server = express()

const quoteRoutes = require('./routes/quotes')
const goalsRoutes = require('./routes/goals')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))

server.use('/api/v1/quotes', quoteRoutes)
server.use('/api/v1/goals', goalsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
