const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// START__####################################################################################################
// File: stepped-guide
// Variable: step

router.get('/stepped-guide', function (req, res) {
	var step = req.query.step;
	return res.render('stepped-guide', { step: step});
})

// END__######################################################################################################

// START__####################################################################################################
// File: who-is-making-the-application
// Variable: rep

router.post('/application/who-is-making-the-application', function (req, res) {
  // Get the answer from the query string 
  var rep = req.session.data['rep']

  if (rep === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/declaration')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: declaration 
// Variable: declaration  

router.post('/application/declaration', function (req, res) {
  // Get the answer from the query string
  var declaration = req.session.data['declaration']

 // if (declaration === 'no') {
    // Redirect to the relevant page
    //res.redirect('/application/prototype')
  //} else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/what-are-you-applying-for')
  //}
})

// END__######################################################################################################

// START__####################################################################################################
// File: what-are-you-applying-for  
// variable: what-type-of-application-would-you-like-to-make?

router.post('/application/what-are-you-applying-for', function (req, res) {
  // Get the answer from the query string 
  var applicationType = req.session.data['what-type-of-application-would-you-like-to-make?'];
  if (applicationType === 'physical-injury') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/OCJ-service-option')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: OCJ-service-option  
// variable: service-option

router.post('/application/OCJ-service-option', function (req, res) {
  // Get the answer from the query string 
  var serviceOption = req.session.data['service-option']

  if (serviceOption === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/compensation')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/prototype')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: compensation
// Variable: otherCompensation

router.post('/application/compensation', function (req, res) {
  // Get the answer from the query string 
  var otherCompensation = req.session.data['otherCompensation']

  if (otherCompensation === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/did-not-apply-for-compensation')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/british-citizen')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: did-not-apply-for-compensation
// 
router.post('/application/did-not-apply-for-compensation', function (req, res) {
    res.redirect('/application/british-citizen')

})
// END__######################################################################################################

// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/british-citizen', function (req, res) {
  // Get the answer from the query string 
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/residence-1')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/criminal-convictions')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: residence-1
// Variable: ordinarily-resident

router.post('/application/residence-1', function (req, res) {
  // Get the answer from the query string 
  var ordinarilyResident = req.session.data['ordinarily-resident']

  if (ordinarilyResident === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/criminal-convictions')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: criminal-convictions
// Variable: criminalConvictions

router.post('/application/criminal-convictions', function (req, res) {
  // Get the answer from the query string 
  var criminalConvictions = req.session.data['criminalConvictions']

  if (criminalConvictions === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/tell-criminal-convictions')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/name')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: tell-criminal-convictions 
// this view is called if user says yes to convicted of a criminal offence

router.post('/application/tell-criminal-convictions', function (req, res) {
  res.redirect('/application/name')
})

// END__######################################################################################################

// START__####################################################################################################
// File: incident-location
// 

router.post('/application/incident-location', function (req, res) {
  res.redirect('/application/incident-reported')
})

// END__######################################################################################################

// START__####################################################################################################
// File: incident-reported
// Variable: incidentReported

 router.post('/application/incident-reported', function (req, res) {
   // Get the answer from the query string 
   var incidentReported = req.session.data['incidentReported']

   if (incidentReported === 'no') {
     // Redirect to the relevant page
     res.redirect('/application/do-you-know-offender')
   } else {
     // If the variable is any other value (or is missing) render the page requested
     res.redirect('/application/reporting-details-what-force')
   }
 })

// END__######################################################################################################

// START__####################################################################################################
// File: single-or-multiple-incidents
// Variable: single-or-multiple-incidents

router.post('/application/single-or-multiple-incidents', function (req, res) {
  // Get the answer from the query string 
  var singleOrMultipleIncidents = req.session.data['single-or-multiple-incidents']

  if (singleOrMultipleIncidents === 'multiple-incidents') {
    // Redirect to the relevant page
    res.redirect('/application/period-of-abuse-start')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/incident-date')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: incident-date
// Variables: incident-date-day, incident-date-month, incident-date-year

router.post('/application/incident-date', function (req, res) {
  // Get the answer from the query string 
  var incidentDateDay = req.session.data['incident-date-day']
  var incidentDateMonth = req.session.data['incident-date-month']
  var incidentDateYear = req.session.data['incident-date-year']

  if ((incidentDateDay == 1) && (incidentDateMonth == 1) && (incidentDateYear == 2017)) {
    // Redirect to the relevant page
    res.redirect('/application/previous-applications')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/incident-location')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: previous-applications
// Variable: previous-applications

router.post('/application/previous-applications', function (req, res) {
  // Get the answer from the query string 
  var previousApplications = req.session.data['previous-applications']


  if (previousApplications === 'no')  {
    // Redirect to the relevant page
    res.redirect('/application/previous-not-eligible')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/incident-location')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: confirmation-page-if-automatic-nil
// variable: apply-for-review

router.post('/application/confirmation-page-if-automatic-nil', function (req, res) {
  // Get the answer from the query string 
  var applyForReview = req.session.data['apply-for-review']

  if (applyForReview  === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/confirmation-of-review')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/prototype')
  }
})

// END__######################################################################################################

module.exports = router
