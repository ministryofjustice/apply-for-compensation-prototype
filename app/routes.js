const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates

// START__Helpers functions ####################################################################################################################################

function getDatefrom2inputs(inputMonth, inputYear) {
  // using the 2 variables above to create a date object with moment which will be the last day of the month
  var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
  var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
  var date = moment([year, month]).endOf('month'); //create a date from the 2 elements we received from the user which is the last day of the month
  return date
}

function isReportedOver48h(incident, report) {
  var delay = moment.duration(report.diff(incident)); // / calculate the difference between the two (that's in milliseconds or something)
  var delayInDays = delay.asDays(); // take that number in days  - we can do that thanks to the Moment library
  return (delayInDays > 2) //reported more than 48h = 2 days after the incident
}
// END__#############################################################################################################################################################


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line






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
    res.redirect('https://www.cica.gov.uk/oas/Account/Create')
  }
})
// END__######################################################################################################


// START__####################################################################################################
// File: what-are-you-applying-for
// variable: what-type-of-application-would-you-like-to-make?
// router.post('/application/what-are-you-applying-for', function (req, res) {
//   // Get the answer from the query string
//   var applicationType = req.session.data['what-type-of-application-would-you-like-to-make?'];
//   if (applicationType === 'physical-injury') {
//     // Redirect to the relevant page
//     res.redirect('https://www.cica.gov.uk/oas/Account/Create')
//   } else {
//     // If the variable is any other value (or is missing) render the page requested
//     res.redirect('/application/OCJ-service-option')
//   }
// })
// END__######################################################################################################

// START__####################################################################################################
// File: OCJ-service-option
// variable: service-option
// router.post('/application/OCJ-service-option', function (req, res) {
//   // Get the answer from the query string
//   var serviceOption = req.session.data['service-option']

//   if (serviceOption === 'no') {
//     // Redirect to the relevant page
//     res.redirect('https://www.cica.gov.uk/oas/Account/Create')
//   } else {
//     // If the variable is any other value (or is missing) render the page requested
//     res.redirect('/application/compensation')
//   }
// })
// END__######################################################################################################

// START__####################################################################################################
// File: additional-info
// router.post('/application/additional-info', function (req, res) {
//   res.redirect('/application/check-your-answers-page')
// })
// END__######################################################################################################

module.exports = router

// Try to keep these inclued in the same order as the journey.
// This makes it easy to find things.
//   Indent routes that relate to questions that are dependant on the previous one

require('./views/application/british-citizen/routes')(router);
require('./views/application/over-18/routes')(router);
require('./views/application/who-is-making-the-application/routes')(router);
require('./views/application/sexual-assault-application/routes')(router);
require('./views/application/after-1979/routes')(router);
  require('./views/application/same-family/routes')(router);
require('./views/application/you-have-a-choice/routes')(router);
require('./views/application/your-choices/routes')(router);
require('./views/application/declaration/routes')(router);
require('./views/application/criminal-convictions/routes')(router);
require('./views/application/tell-criminal-convictions/routes')(router);
require('./views/application/bridge/routes')(router);
require('./views/application/incident-reported/routes')(router);
  require('./views/application/reporting-crime-not-reported/routes')(router);
require('./views/application/crime-reported-date/routes')(router);
require('./views/application/reporting-details-what-force/routes')(router);
require('./views/application/reporting-details-police-officer/routes')(router);
require('./views/application/crime-reference/routes')(router);
require('./views/application/single-or-multiple-incidents/routes')(router);
  require('./views/application/period-of-abuse-start/routes')(router);
  require('./views/application/period-of-abuse-end/routes')(router);
require('./views/application/incident-date/routes')(router);
require('./views/application/incident-location/routes')(router);
require('./views/application/do-you-know-offender/routes')(router);
  require('./views/application/offender-name/routes')(router);
  require('./views/application/ongoing-relationship/routes')(router);
    require('./views/application/what-is-relationship/routes')(router);
require('./views/application/name/routes')(router);
require('./views/application/name-have-other/routes')(router);
  require('./views/application/name-other/routes')(router);
require('./views/application/date-of-birth/routes')(router);
require('./views/application/email-address/routes')(router);
require('./views/application/address/routes')(router);
  require('./views/application/address-manually/routes')(router);
  require('./views/application/address-non-UK/routes')(router);
require('./views/application/phone-number/routes')(router);
require('./views/application/compensation/routes')(router);
  require('./views/application/compensation-why-not/routes')(router);
  require('./views/application/compensation-who/routes')(router);
    require('./views/application/compensation-amount/routes')(router);
require('./views/application/check-your-answers-page/routes')(router);
// @todo these files need to go in the right place in the list above
require('./views/application/previous-applications/routes')(router);
require('./views/application/application-delay/routes')(router);
require('./views/application/find-uk-address/routes')(router);
require('./views/application/reporting-delay/routes')(router);
