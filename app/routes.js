const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// Data

// Branching example
router.get('/who-is-making-the-application', function (req, res) {
  res.render('who-is-making-the-application')
})

router.get('/applied-for-compensation', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  if (req.session.data.applicationRep === 'false') {
    // Redirect to the relevant page
    res.redirect('applied-for-compensation')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('prototype')
  }
})



// Tests
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
