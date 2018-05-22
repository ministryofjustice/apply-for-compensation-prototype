var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})



// add your routes here


// START__####################################################################################################
// Step: 1
// File: who-is-making-the-application
// Variable: applicationRep
// Question: Are you making this application on behalf of somone else?
// Input type: yes/no

router.get('/application/compensation', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var rep = req.query.rep

  if (rep === 'true') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.render('application/compensation')
  }
})

// END__######################################################################################################


// START__####################################################################################################
// Step: 2
// File: compensation
// Variable: otherCompensation
// Question: Have you applied for compensation from any other sources?
// Input type: yes/no

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

// END__######################################################################################################


// START__####################################################################################################
// Step: 3
// File: declaration
// Variable:
// Question: Have you applied for compensation from any other sources?
// Input type: yes/no

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

// END__######################################################################################################


// START__####################################################################################################
// Step: 4
// File: name
// Variable: fullName
// Question: What is your full name?
// Input type: text



// END__######################################################################################################


// START__####################################################################################################
// Step: 4
// File: british-citizen
// Variable: britishCitizen
// Question: Are you a British Citizen?
// Input type: yes/no

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

// END__######################################################################################################


// START__####################################################################################################
// Step: 5
// File: unable-to-work
// Variable: unableToWork
// Question: As a result of your injuries were you unable to work?
// Input type: yes/no
// END__######################################################################################################


// START__####################################################################################################
// Step:
// File: return-to-work
// Variable: returnToWork
// Question: Have you been able to return to paid work?
// Input type: yes/no
// END__######################################################################################################


// START__####################################################################################################
// Step:
// File: date-returned-to-work
// Variable: dateReturnedToWork
// Question: What date did you return to paid work?
// Input type: date
// END__######################################################################################################


// START__####################################################################################################
// Step:
// File: equiptment-or-services
// Variable: equiptmentOrServices
// Question: As a result of your injuries have you had to buy equiptment or services that you did not need before you were <mugged>
// Input type: yes/no
// END__######################################################################################################


// START__####################################################################################################
// Step:
// File: what-equiptment-or-services
// Variable: whatEquiptmentOrServices
// Question: what have you had to buy?
// Input type: text field with add another
// END__######################################################################################################




// router.get('/application/other-compensation', function (req, res) {

// 	if (req.session.data.rep === 'false') {
// 		res.render('application/other-comp')
// 	} else {
// 		res.render('application/prototype')
// 	}

// })




module.exports = router


// Branching

// who is making the application
// router.get('/application/who-is-making-the-application', function (req, res) {
//   res.render('application/who-is-making-the-application')
// })


// // Branching example
// router.get('/application/over-18', function (req, res) {
//   // Get the answer from the query string (eg. ?over18=false)
//   var over18 = req.query.over18

//   if (over18 === 'false') {
//     // Redirect to the relevant page
//     res.redirect('/application/under-18')
//   } else {
//     // If over18 is any other value (or is missing) render the page requested
//     res.render('application/over-18')
//   }
// })
