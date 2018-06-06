const express = require('express')
const router = express.Router()

// Route index page
router.post('/', function (req, res) {
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

router.post('/application/declaration', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
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
// File: compensation
// Variable: otherCompensation

router.post('/application/incident-reported', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var otherCompensation = req.session.data['otherCompensation']

  if (otherCompensation === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/incident-reported')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: declaration
// Variable: declaration

router.post('/application/compensation', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var declaration = req.session.data['declaration']

  if (declaration === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/compensation')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

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
// File: criminal-convictions
// Variable: criminalConvictions

router.post('/application/name', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var criminalConvictions = req.session.data['criminalConvictions']

  if (criminalConvictions === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/name')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: incident-reported
// Variable: incidentReported

router.post('/application/incident-location', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var incidentReported = req.session.data['incidentReported']

  if (incidentReported === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('application/incident-location')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: incident-location
// Variable: incidentLocation

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

// END__######################################################################################################

// START__####################################################################################################
// File: return-to-work
// Variable: returnToWork

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
// File: equiptment-or-services
// Variable: equiptmentOrServices

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
// File: treatment-ongoing
// Variable: treatmentOngoing

router.post('/application/obtain-medical', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var treatmentOngoing = req.session.data['treatmentOngoing']

  if (treatmentOngoing === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/obtain-medical')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: obtain-medical
// Variable: obtainMedical

router.post('/application/pay-for-medical', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var obtainMedical = req.session.data['obtainMedical']

  if (obtainMedical === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/pay-for-medical')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: pay-for-medical
// Variable: obtainMedical

router.post('/application/unable-to-work', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var payforMedical = req.session.data['payforMedical']

  if (payforMedical === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/unable-to-work')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: unable-to-work
// Variable: obtainMedical

router.post('/application/check-your-answers-page', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var unableToWork = req.session.data['unableToWork']

  if (unableToWork === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.redirect('/application/check-your-answers-page')
  }
})

// END__######################################################################################################


module.exports = router
