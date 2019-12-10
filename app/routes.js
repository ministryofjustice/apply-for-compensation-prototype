// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('./routes-content');

// Route index page
router.get('/', function (req, res) {
    res.render('index')
})






// CURRENT RELEASE - RELEASE 8 MVP PROJECT //
require('./views/application/british-citizen/routes')(router, viewContent);
require('./views/application/over-18/routes')(router, viewContent);
require('./views/application/who-is-making-the-application/routes')(router, viewContent);
require('./views/application/sexual-assault-application/routes')(router, viewContent);
require('./views/application/you-have-a-choice/routes')(router, viewContent);
require('./views/application/impact-on-you/routes')(router, viewContent);
require('./views/application/your-choices/routes')(router, viewContent);
require('./views/application/declaration/routes')(router, viewContent);
require('./views/application/incident-reported/routes')(router, viewContent);
require('./views/application/reporting-crime-not-reported/routes')(router, viewContent);
require('./views/application/crime-reported-date/routes')(router, viewContent);
require('./views/application/reporting-details-what-force/routes')(router, viewContent);
require('./views/application/reporting-details-what-force-manual/routes')(router, viewContent);
require('./views/application/crime-reference/routes')(router, viewContent);
require('./views/application/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/incident-date/routes')(router, viewContent);
require('./views/application/incident-location/routes')(router, viewContent);
require('./views/application/do-you-know-offender/routes')(router, viewContent);
require('./views/application/offender-name/routes')(router, viewContent);
require('./views/application/what-is-relationship/routes')(router, viewContent);
require('./views/application/name/routes')(router, viewContent);
require('./views/application/name-have-other/routes')(router, viewContent);
require('./views/application/name-other/routes')(router, viewContent);
require('./views/application/gender/routes')(router, viewContent);
require('./views/application/date-of-birth/routes')(router, viewContent);
require('./views/application/email-address/routes')(router, viewContent);
// require('./views/application/address/routes')(router, viewContent);
require('./views/application/address-manually/routes')(router, viewContent);
// require('./views/application/address-non-uk/routes')(router, viewContent);
require('./views/application/phone-number/routes')(router, viewContent);
require('./views/application/compensation/routes')(router, viewContent);
// require('./views/application/compensation-why-not/routes')(router, viewContent);
require('./views/application/other-compensation/routes')(router, viewContent);
// require('./views/application/compensation-amount/routes')(router, viewContent);
require('./views/application/check-your-answers-page/routes')(router, viewContent);
// @todo these files need to go in the right place in the list above
require('./views/application/previous-applications/routes')(router, viewContent);
// require('./views/application/previous-not-eligible/routes')(router, viewContent);
require('./views/application/application-delay/routes')(router, viewContent);
// require('./views/application/find-uk-address/routes')(router, viewContent);
require('./views/application/reporting-delay/routes')(router, viewContent);
require('./views/application/confirmation-page-if-automatic-nil/routes')(router, viewContent);

require('./views/application/transition/routes')(router, viewContent);

// Police MVP //
require('./views/application/england-location/routes')(router, viewContent);
require('./views/application/england-forces/routes')(router, viewContent);
require('./views/application/scotland-location/routes')(router, viewContent);
require('./views/application/scotland-forces/routes')(router, viewContent);
require('./views/application/wales-location/routes')(router, viewContent);
require('./views/application/wales-forces/routes')(router, viewContent);
require('./views/application/somewhere-else/routes')(router, viewContent);

// Police Force Concept for possible testing //
require('./views/concepts/police-force/incident-location/routes')(router, viewContent);
require('./views/concepts/police-force/scotland-forces/routes')(router, viewContent);
require('./views/concepts/police-force/england-location/routes')(router, viewContent);
require('./views/concepts/police-force/england-forces/routes')(router, viewContent);
require('./views/concepts/police-force/scotland-location/routes')(router, viewContent);
require('./views/concepts/police-force/wales-location/routes')(router, viewContent);
require('./views/concepts/police-force/welsh-forces/routes')(router, viewContent);
require('./views/concepts/police-force/somewhere-else/routes')(router, viewContent);

// Timeout Screens //
require('./views/concepts/timeout/timed-out/routes')(router, viewContent);

// Guidance Concept //
require('./views/concepts/guidance/routes')(router, viewContent);

//SRR Prototype //
require('./views/srr/previous-applications/routes')(router, viewContent);
require('./views/srr/name/routes')(router, viewContent);
require('./views/srr/phone-number/routes')(router, viewContent);
require('./views/srr/name-have-other/routes')(router, viewContent);
require('./views/srr/other-names/routes')(router, viewContent);
require('./views/srr/address/routes')(router, viewContent);
require('./views/srr/date-of-birth/routes')(router, viewContent);
require('./views/srr/preferred-days/routes')(router, viewContent);
require('./views/srr/preferred-times/routes')(router, viewContent);
require('./views/srr/check-your-answers-page/routes')(router, viewContent);


//Police Force Mockups Oct 2019 //

require('./views/concepts/forces-mockups/v1/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/england-location/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/do-you-know-offender/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/incident-location/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/police-force/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/scotland-location/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/somewhere-else/routes')(router, viewContent);
require('./views/concepts/forces-mockups/v1/wales-location/routes')(router, viewContent);


//Police Force Concept V2 Prototype //
require('./views/concepts/police-force-V2/routes')(router, viewContent);
require('./views/concepts/police-force-V2/force-search/routes')(router, viewContent);

//Police Force Concept V3 Prototype //
require('./views/concepts/police-force-V3/routes')(router, viewContent);
require('./views/concepts/police-force-V3/country/routes')(router, viewContent);
require('./views/concepts/police-force-V3/scotland-forces/routes')(router, viewContent);
require('./views/concepts/police-force-V3/england-forces/routes')(router, viewContent);
require('./views/concepts/police-force-V3/wales-forces/routes')(router, viewContent);
require('./views/concepts/police-force-V3/somewhere-else/routes')(router, viewContent);
require('./views/concepts/police-force-V3/crime-reference/routes')(router, viewContent);
require('./views/concepts/police-force-V3/incident-date/routes')(router, viewContent);
require('./views/concepts/police-force-V3/location/routes')(router, viewContent);
require('./views/concepts/police-force-V3/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/concepts/police-force-V3/do-you-know-offender/routes')(router, viewContent);

//Police Force Concept V4 AS IS Prototype //
require('./views/concepts/police-force-V4/routes')(router, viewContent);
require('./views/concepts/police-force-V4/force/routes')(router, viewContent);
require('./views/concepts/police-force-V4/country/routes')(router, viewContent);
require('./views/concepts/police-force-V4/scotland-location/routes')(router, viewContent);
require('./views/concepts/police-force-V4/england-location/routes')(router, viewContent);
require('./views/concepts/police-force-V4/wales-location/routes')(router, viewContent);
require('./views/concepts/police-force-V4/somewhere-else/routes')(router, viewContent);
require('./views/concepts/police-force-V4/crime-reference/routes')(router, viewContent);
require('./views/concepts/police-force-V4/incident-date/routes')(router, viewContent);
require('./views/concepts/police-force-V4/incident-location/routes')(router, viewContent);
require('./views/concepts/police-force-V4/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/concepts/police-force-V4/do-you-know-offender/routes')(router, viewContent);


//MINORS JOURNEY //
require('./views/concepts/minors/british-citizen/routes')(router, viewContent);
require('./views/concepts/minors/care-order/routes')(router, viewContent);
require('./views/concepts/minors/care-order-details/routes')(router, viewContent);
require('./views/concepts/minors/declaration/routes')(router, viewContent);
require('./views/concepts/minors/date-of-birth/routes')(router, viewContent);
require('./views/concepts/minors/impact-on-you/routes')(router, viewContent);
require('./views/concepts/minors/incident-location/routes')(router, viewContent);
require('./views/concepts/minors/incident-reported/routes')(router, viewContent);
require('./views/concepts/minors/reporting-crime-not-reported/routes')(router, viewContent);
require('./views/concepts/minors/sexual-assault-application/routes')(router, viewContent);
require('./views/concepts/minors/transition/routes')(router, viewContent);
require('./views/concepts/minors/victim-name/routes')(router, viewContent);
require('./views/concepts/minors/victim-name-have-other/routes')(router, viewContent);
require('./views/concepts/minors/victim-name-other/routes')(router, viewContent);
require('./views/concepts/minors/who-are-you/routes')(router, viewContent);
require('./views/concepts/minors/who-is-making-the-application/routes')(router, viewContent);
require('./views/concepts/minors/your-choices/routes')(router, viewContent);
require('./views/concepts/minors/your-name/routes')(router, viewContent);
require('./views/concepts/minors/authority-to-apply/routes')(router, viewContent);
require('./views/concepts/minors/crime-reference/routes')(router, viewContent);
require('./views/concepts/minors/crime-reported-date/routes')(router, viewContent);
require('./views/concepts/minors/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/concepts/minors/incident-date/routes')(router, viewContent);
require('./views/concepts/minors/period-of-abuse-start/routes')(router, viewContent);
require('./views/concepts/minors/period-of-abuse-end/routes')(router, viewContent);
require('./views/concepts/minors/england-location/routes')(router, viewContent);
require('./views/concepts/minors/scotland-location/routes')(router, viewContent);
require('./views/concepts/minors/wales-location/routes')(router, viewContent);
require('./views/concepts/minors/somewhere-else/routes')(router, viewContent);
require('./views/concepts/minors/do-you-know-offender/routes')(router, viewContent);
require('./views/concepts/minors/offender-name/routes')(router, viewContent);
require('./views/concepts/minors/what-is-relationship/routes')(router, viewContent);
require('./views/concepts/minors/compensation/routes')(router, viewContent);
require('./views/concepts/minors/other-compensation/routes')(router, viewContent);
require('./views/concepts/minors/previous-applications/routes')(router, viewContent);
require('./views/concepts/minors/email-address/routes')(router, viewContent);
require('./views/concepts/minors/phone-number/routes')(router, viewContent);
require('./views/concepts/minors/check-your-answers-page/routes')(router, viewContent);
require('./views/concepts/minors/address-manually/routes')(router, viewContent);
require('./views/concepts/minors/confirmation-page/routes')(router, viewContent);
require('./views/concepts/minors/transition-over-18/routes')(router, viewContent);
require('./views/concepts/minors/child-address/routes')(router, viewContent);
require('./views/concepts/minors/child-address-manually/routes')(router, viewContent);
require('./views/concepts/minors/application-delay/routes')(router, viewContent);


// MENTAL INJURIES //

require('./views/concepts/mental-injuries/v1/mental-health/routes')(router, viewContent);
require('./views/concepts/mental-injuries/v1/duration/routes')(router, viewContent);
require('./views/concepts/mental-injuries/v1/diagnosis/routes')(router, viewContent);




//Extra questions & equal oportunities //
require('./views/concepts/survey/routes')(router, viewContent);

// RELEASE 7 - 17.12.2018 /////////////////////////////////////////////////////////////////////


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/stepped-guide', function (req, res) {
	var step = req.query.step;
	return res.render('release-7/stepped-guide', { step: step});
})

router.post('/release-7/who-is-making-the-application', function (req, res) {
  // Get the answer from the query string
  var rep = req.session.data['rep']

  if (rep === 'yes') {
    // Redirect to the relevant page
    res.redirect('/release-7/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/declaration')
  }
})


router.post('/release-7/declaration', function (req, res) {
  var declaration = req.session.data['declaration']

    res.redirect('/release-7/what-are-you-applying-for')
})


router.post('/release-7/what-are-you-applying-for', function (req, res) {
  // Get the answer from the query string
  var applicationType = req.session.data['what-type-of-application-would-you-like-to-make?'];
  if (applicationType === 'physical-injury') {
    // Redirect to the relevant page
    res.redirect('/release-7/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/OCJ-service-option')
  }
})


router.post('/release-7/OCJ-service-option', function (req, res) {
  // Get the answer from the query string
  var serviceOption = req.session.data['service-option']

  if (serviceOption === 'no') {
    // Redirect to the relevant page
    res.redirect('/release-7/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/compensation')
  }
})


router.post('/release-7/compensation', function (req, res) {
    res.redirect('/release-7/british-citizen')
})

router.post('/release-7/did-not-apply-for-compensation', function (req, res) {
    res.redirect('/release-7/british-citizen')
})


router.post('/release-7/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'no') {
    // Redirect to the relevant page
    res.redirect('/release-7/residence-1')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/criminal-convictions')
  }
})

router.post('/release-7/residence-1', function (req, res) {
  // Get the answer from the query string
  var ordinarilyResident = req.session.data['ordinarily-resident']

  if (ordinarilyResident === 'no') {
    // Redirect to the relevant page
    res.redirect('/release-7/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/criminal-convictions')
  }
})

router.post('/release-7/criminal-convictions', function (req, res) {
  var criminalConvictions = req.session.data['criminalConvictions']

  if (criminalConvictions === 'yes') {
    res.redirect('/release-7/tell-criminal-convictions')
  } else {
    res.redirect('/release-7/name')
  }
})

router.post('/release-7/tell-criminal-convictions', function (req, res) {
  res.redirect('/release-7/name')
})

router.post('/release-7/name', function (req, res) {
  res.redirect('/release-7/date-of-birth')
})

router.post('/release-7/date-of-birth', function (req, res) {
  res.redirect('/release-7/email-address')
})

router.post('/release-7/email-address', function (req, res) {
  if (!req.session.data['emailAddress']) {
    req.session.data['emailAddress'] = 'name@domain.com'
  }
  res.redirect('/release-7/address')
})

router.post('/release-7/address', function (req, res) {
  res.redirect('/release-7/phone-number')
})

router.post('/release-7/phone-number', function (req, res) {
  res.redirect('/release-7/single-or-multiple-incidents')
})

router.post('/release-7/single-or-multiple-incidents', function (req, res) {
  // Get the answer from the query string
  var singleOrMultipleIncidents = req.session.data['single-or-multiple-incidents']

  if (singleOrMultipleIncidents === 'It happened over a period of time') {
    // Redirect to the relevant page
    res.redirect('/release-7/period-of-abuse-start')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/incident-date')
  }
})

router.post('/release-7/period-of-abuse-start', function (req, res) {
  res.redirect('/release-7/period-of-abuse-end')
})

router.post('/release-7/period-of-abuse-end', function (req, res) {
  res.redirect('/release-7/incident-location')
})

router.post('/release-7/incident-date', function (req, res) {
  // Get the answer from the query string
  var incidentDateDay = req.session.data['incident-date-day']
  var incidentDateMonth = req.session.data['incident-date-month']
  var incidentDateYear = req.session.data['incident-date-year']

  if ((incidentDateDay == 1) && (incidentDateMonth == 1) && (incidentDateYear == 2017)) {
    // Redirect to the relevant page
    res.redirect('/release-7/previous-applications')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/incident-location')
  }
})

router.post('/release-7/previous-applications', function (req, res) {
  // Get the answer from the query string
  var previousApplications = req.session.data['previous-applications']

  if (previousApplications === 'no')  {
    // Redirect to the relevant page
    res.redirect('/release-7/previous-not-eligible')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/incident-location')
  }
})

router.post('/release-7/incident-location', function (req, res) {
  res.redirect('/release-7/incident-reported')
})


 router.post('/release-7/incident-reported', function (req, res) {
   // Get the answer from the query string
   var incidentReported = req.session.data['incidentReported']

   if (incidentReported === 'no') {
     // Redirect to the relevant page
     res.redirect('/release-7/do-you-know-offender')
   } else {
     // If the variable is any other value (or is missing) render the page requested
     res.redirect('/release-7/reporting-details-what-force')
   }
 })

router.post('/release-7/reporting-details-what-force', function (req, res) {
  res.redirect('/release-7/reporting-details-police-officer')
})

router.post('/release-7/reporting-details-police-officer', function (req, res) {
  res.redirect('/release-7/crime-reference')
})

router.post('/release-7/crime-reference', function (req, res) {
  res.redirect('/release-7/do-you-know-offender')
})

router.post('/release-7/do-you-know-offender', function (req, res) {
  // Get the answer from the query string
  var knowOffender = req.session.data['know-offender']

  if (knowOffender === 'no')  {
    // Redirect to the relevant page
    res.redirect('/release-7/check-your-answers-page')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/offender-name')
  }
})

router.post('/release-7/offender-name', function (req, res) {

    res.redirect('/release-7/living-with-offender-before')
})

router.post('/release-7/living-with-offender-before', function (req, res) {
  // Get the answer from the query string
  var withOffenderBefore = req.session.data['living-with-offender-before']

  if (withOffenderBefore === 'no')  {
    // Redirect to the relevant page
    res.redirect('/release-7/ongoing-relationship')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/living-with-offender-now')
  }
})

router.post('/release-7/living-with-offender-now', function (req, res) {
  // Get the answer from the query string
  var withOffenderNow = req.session.data['living-with-offender-now']

  if (withOffenderNow === 'no')  {
    // Redirect to the relevant page
    res.redirect('/release-7/ongoing-relationship')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/prototype')
  }
})

router.post('/release-7/ongoing-relationship', function (req, res) {
  // Get the answer from the query string
  var ongoingRelationship = req.session.data['ongoing-relationship']

  if (ongoingRelationship === 'yes')  {
    // Redirect to the relevant page
    res.redirect('/release-7/what-is-relationship')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/check-your-answers-page')
  }
})

router.post('/release-7/what-is-relationship', function (req, res) {
  res.redirect('/release-7/check-your-answers-page')
})

router.post('/release-7/confirmation-page-if-automatic-nil', function (req, res) {
  // Get the answer from the query string
  var applyForReview = req.session.data['apply-for-review']

  if (applyForReview  === 'yes') {
    // Redirect to the relevant page
    res.redirect('/release-7/confirmation-of-review')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/release-7/prototype')
  }
})

// END OF RELEASE 7 #################################################################################

// RELEASE 6 -  //




// DO NOT DELETE THE FOLLOWING


require('./routes-filelist')(router);

// Add your routes here - above the module.exports line
module.exports = router;
