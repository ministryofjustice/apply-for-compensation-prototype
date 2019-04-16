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

// Try to keep these inclued in the same order as the journey.
// This makes it easy to find things.
//   Indent routes that relate to questions that are dependant on the previous one
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

require('./routes-filelist')(router);

// Add your routes here - above the module.exports line
module.exports = router;
