var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


// add your routes here

// Branching

// who is making the application
// router.get('/application/who-is-making-the-application', function (req, res) {
//   res.render('application/who-is-making-the-application')
// })

// Branching
router.get('/application/over-18', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18

  if (over18 === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/under-18')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/over-18')
  }
})


// who-is-making-the-application
router.get('/application/compensation', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var rep = req.query.rep

  if (rep === 'true') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/compensation')
  }
})

// compensation
router.get('/application/declaration', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var otherCompensation = req.query.otherCompensation

  if (otherCompensation === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/declaration')
  }
})

// declaration
router.get('/application/declaration', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var otherCompensation = req.query.otherCompensation

  if (otherCompensation === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/declaration')
  }
})

// name
// router.get('/application/date-of-birth', function (req, res) {
//   res.render('application/date-of-birth')
// })

// british citizen
router.get('/application/criminal-convictions', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var britishCitizen = req.query.britishCitizen

  if (britishCitizen === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/criminal-convictions')
  }
})




// router.get('/application/other-compensation', function (req, res) {

// 	if (req.session.data.rep === 'false') {
// 		res.render('application/other-comp')
// 	} else {
// 		res.render('application/prototype')
// 	}
  
// })



module.exports = router
