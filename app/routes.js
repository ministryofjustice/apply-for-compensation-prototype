const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// Data
router.get('/tests/data-test', function (req, res) {
  res.render('tests/data-test', { 'name': 'Gavin' })
})

router.get('/', function (req, res) {
  res.render('index', { 'name': 'Gavin' })
})

router.get('', function (req, res) {
  res.render('', { 'name': 'Gavin' })
})

module.exports = router
