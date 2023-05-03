const express = require('express')
const hbs = require('express-handlebars')
const route = require('./routes')
const userData = require('./data/data.json')

// Middleware
const app = express()
module.exports = app

// Server config
const publicFolder = __dirname + '/public' // add public path here
app.use(express.static(publicFolder))
app.use(express.urlencoded({ extended: false }))

// Handlebars config
app.engine('hbs', hbs.engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

// App use
// app.use('profile', route)

// Houe route
app.get('/', async (req, res) => {
  await res.render('home', userData) // add data json constant here
})
