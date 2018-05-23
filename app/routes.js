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
// Step: 5
// File: date-of-birth
// Variable: 'dob-day', 'dob-month', 'dob-year'
// Question: What is your date of birth?
// Input type: number



// END__######################################################################################################



// START__####################################################################################################
// Step: 5
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
// Step: 6
// File: criminal-convictions
// Variable: criminalConvictions
// Question: Do you have any unspent criminal convictions?
// Input type: yes/no

router.get('/application/incident-reported', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var criminalConvictions = req.query.criminalConvictions

  if (criminalConvictions === 'true') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/incident-reported')
  }
})



// END__######################################################################################################



// START__####################################################################################################
// Step: 7
// File: incident-reported
// Variable: incidentReported
// Question: Was the incident reported to the police?
// Input type: yes/no

router.get('/application/incident-date', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var incidentReported = req.query.incidentReported

  if (incidentReported === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/incident-date')
  }
})



// END__######################################################################################################



// START__####################################################################################################
// Step: 8
// File: incident-date
// Variable: 'incident-day', 'incident-month', 'incident-year'
// Question: When did the incident happen?
// Input type: number



// END__######################################################################################################



// START__####################################################################################################
// Step: 9
// File: incident-location
// Variable: incidentLocation
// Question: Did the incident happen in the England, Scotland or Wales?
// Input type: yes/no

router.get('/application/crime-reference', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var incidentLocation = req.query.incidentLocation

  if (incidentLocation === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/crime-reference')
  }
})

// Notes for Simon if I change 'false' above to 'true' both of the radio buttons take me to the prototype screen.
// If I swap 'prototype' and 'crime-reference' I don't get a change in the routing of the pages.
// so I'm confused



// END__######################################################################################################



// START__####################################################################################################
// Step: 10
// File: crime-reference
// Variable: crimeReference
// Question: What is the crime reference number for the incident?
// Input type: text



// END__######################################################################################################



// START__####################################################################################################
// Step: 11
// File: describe-incident
// Variable: describeIncident
// Question: Describe the incident in your own words
// Input type: text



// END__######################################################################################################



// START__####################################################################################################
// Step: 12
// File: injury-selection
// Variable: injurySelection
// Question: What injuries did you suffer as a result of the incident?
// Input type: text



// END__######################################################################################################



// START__####################################################################################################
// Step: 13
// File: medical-treatment
// Variable: medicalTreatment
// Question: Did you receive medical treatment for your injuries?
// Input type: yes/no

router.get('/application/treatment-date', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var medicalTreatment = req.query.medicalTreatment

  if (medicalTreatment === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/treatment-date')
  }
})



// END__######################################################################################################



// START__####################################################################################################
// Step: 14
// File: treatment-date
// Variable: 'treatment-day', 'treatment-month', 'treatment-year'
// Question: What date did you first receive treatment for your injuries?
// Input type: number



// END__######################################################################################################



// START__####################################################################################################
// Step: 15
// File: unable-to-work
// Variable: unableToWork
// Question: As a result of your injuries were you unable to work?
// Input type: yes/no

router.get('/application/return-to-work', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var unableToWork = req.query.unableToWork

  if (unableToWork === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/return-to-work')
  }
})


// END__######################################################################################################



// START__####################################################################################################
// Step: 16
// File: return-to-work
// Variable: returnToWork
// Question: Have you been able to return to paid work?
// Input type: yes/no

router.get('/application/date-returned-to-work', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var returnToWork = req.query.returnToWork

  if (returnToWork === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/date-returned-to-work')
  }
})


// END__######################################################################################################



// START__####################################################################################################
// Step: 17
// File: date-returned-to-work
// Variable: dateReturnedToWork
// Question: What date did you return to paid work?
// Input type: date



// END__######################################################################################################



// START__####################################################################################################
// Step: 18
// File: equiptment-or-services
// Variable: equiptmentOrServices
// Question: As a result of your injuries have you had to buy equiptment or services that you did not need before you were <mugged>
// Input type: yes/no

router.get('/application/what-equiptment-or-services', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var equiptmentOrServices = req.query.equiptmentOrServices

  if (equiptmentOrServices === 'false') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/what-equiptment-or-services')
  }
})

// END__######################################################################################################



// START__####################################################################################################
// Step: 19
// File: what-equiptment-or-services
// Variable: whatEquiptmentOrServices
// Question: what have you had to buy?
// Input type: text field with add another


// END__######################################################################################################



// START__####################################################################################################
// Step: 20
// File: check-your-answers-page
// Variable:
// Question:
// Input type:


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
