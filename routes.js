const express = require('express')
const path = require('path')
const userData = require('./data/data.json')

// Router setting
const router = express.Router()

// Data path
const dataPath = path.join(__dirname, '/server/data/data.json')

// Add new user
router.post('/', async (req, res) => {
  const newID = userData['profiles'].length + 1
  const newName = req.body.name
  const newAge = req.body.age
  const newGender = req.body.gender
  const newImage = await fetch('')
})

module.exports = router
