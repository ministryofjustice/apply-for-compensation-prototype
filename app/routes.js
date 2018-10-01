// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('./routes-content');

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

// Try to keep these inclued in the same order as the journey.
// This makes it easy to find things.
//   Indent routes that relate to questions that are dependant on the previous one
require('./views/application/british-citizen/routes')(router, viewContent);
require('./views/application/over-18/routes')(router, viewContent);
require('./views/application/who-is-making-the-application/routes')(router, viewContent);
require('./views/application/sexual-assault-application/routes')(router, viewContent);
require('./views/application/after-1979/routes')(router, viewContent);
require('./views/application/same-family/routes')(router, viewContent);
require('./views/application/you-have-a-choice/routes')(router, viewContent);
require('./views/application/your-choices/routes')(router, viewContent);
require('./views/application/declaration/routes')(router, viewContent);
require('./views/application/criminal-convictions/routes')(router, viewContent);
require('./views/application/tell-criminal-convictions/routes')(router, viewContent);
require('./views/application/bridge/routes')(router, viewContent);
require('./views/application/incident-reported/routes')(router, viewContent);
require('./views/application/reporting-crime-not-reported/routes')(router, viewContent);
require('./views/application/crime-reported-date/routes')(router, viewContent);
require('./views/application/reporting-details-what-force/routes')(router, viewContent);
require('./views/application/reporting-details-police-officer/routes')(router, viewContent);
require('./views/application/crime-reference/routes')(router, viewContent);
require('./views/application/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/incident-date/routes')(router, viewContent);
require('./views/application/incident-location/routes')(router, viewContent);
require('./views/application/do-you-know-offender/routes')(router, viewContent);
require('./views/application/offender-name/routes')(router, viewContent);
require('./views/application/ongoing-relationship/routes')(router, viewContent);
require('./views/application/what-is-relationship/routes')(router, viewContent);
require('./views/application/name/routes')(router, viewContent);
require('./views/application/name-have-other/routes')(router, viewContent);
require('./views/application/name-other/routes')(router, viewContent);
require('./views/application/date-of-birth/routes')(router, viewContent);
require('./views/application/email-address/routes')(router, viewContent);
require('./views/application/address/routes')(router, viewContent);
require('./views/application/address-manually/routes')(router, viewContent);
require('./views/application/address-non-UK/routes')(router, viewContent);
require('./views/application/phone-number/routes')(router, viewContent);
require('./views/application/compensation/routes')(router, viewContent);
require('./views/application/compensation-why-not/routes')(router, viewContent);
require('./views/application/compensation-who/routes')(router, viewContent);
require('./views/application/compensation-amount/routes')(router, viewContent);
require('./views/application/check-your-answers-page/routes')(router, viewContent);
// @todo these files need to go in the right place in the list above
require('./views/application/previous-applications/routes')(router, viewContent);
require('./views/application/application-delay/routes')(router, viewContent);
require('./views/application/find-uk-address/routes')(router, viewContent);
require('./views/application/reporting-delay/routes')(router, viewContent);
require('./views/application/confirmation-page-if-automatic-nil/routes')(router, viewContent);

require('./routes-filelist')(router);

// Add your routes here - above the module.exports line
module.exports = router;