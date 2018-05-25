const express = require('express')
const router = express.Router()

// Route index page
router.post('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line


// START__####################################################################################################
// Step: 1
// File: who-is-making-the-application
// Variable: applicationRep
// Question: Are you making this application on behalf of somone else?
// Input type: yes/no

router.post('/application/compensation', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var rep = req.session.data['rep']

  if (rep === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/compensation')
  }
})

// END__######################################################################################################



// START__####################################################################################################
// Step: 2
// File: compensation
// Variable: otherCompensation
// Question: Have you applied for compensation from any other sources?
// Input type: yes/no

router.post('/application/declaration', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var otherCompensation = req.session.data['otherCompensation']

  if (otherCompensation === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/declaration')
  }
})

// END__######################################################################################################



// START__####################################################################################################
// Step: 3
// File: declaration
// Variable: declaration
// Question: Have you applied for compensation from any other sources?
// Input type: yes/no

router.post('/application/name', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var declaration = req.session.data['declaration']

  if (declaration === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/name')
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

router.post('/application/criminal-convictions', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/criminal-convictions')
  }
})

// END__######################################################################################################



// START__####################################################################################################
// Step: 6
// File: criminal-convictions
// Variable: criminalConvictions
// Question: Do you have any unspent criminal convictions?
// Input type: yes/no

router.post('/application/incident-reported', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var criminalConvictions = req.session.data['criminalConvictions']

  if (criminalConvictions === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/incident-reported')
  }
})



// END__######################################################################################################



// START__####################################################################################################
// Step: 7
// File: incident-reported
// Variable: incidentReported
// Question: Was the incident reported to the police?
// Input type: yes/no

router.post('/application/incident-date', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var incidentReported = req.session.data['incidentReported']

  if (incidentReported === 'no') {
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

router.post('/application/crime-reference', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var incidentLocation = req.session.data['incidentLocation']

  if (incidentLocation === 'no') {
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

router.post('/application/treatment-date', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var medicalTreatment = req.session.data['medicalTreatment']

  if (medicalTreatment === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/treatment-date')
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

router.post('/application/return-to-work', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var unableToWork = req.session.data['unableToWork']

  if (unableToWork === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/return-to-work')
  }
})


// END__######################################################################################################



// START__####################################################################################################
// Step: 16
// File: return-to-work
// Variable: returnToWork
// Question: Have you been able to return to paid work?
// Input type: yes/no

router.post('/application/date-returned-to-work', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var returnToWork = req.session.data['returnToWork']

  if (returnToWork === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/date-returned-to-work')
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

router.post('/application/what-equiptment-or-services', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var equiptmentOrServices = req.session.data['equiptmentOrServices']

  if (equiptmentOrServices === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/what-equiptment-or-services')
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



module.exports = router
