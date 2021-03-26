// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('../routes-content');
const utils = require('../utils')

//-------------------------------------------------------------//
// CONCEPTS AND IDEATION                                       //
// This routes file  contains the routes for a mix of concepts //
//-------------------------------------------------------------//

// Police Force Concept for possible testing //
require('../views/concepts/police-force/incident-location/routes')(router, viewContent);
require('../views/concepts/police-force/scotland-forces/routes')(router, viewContent);
require('../views/concepts/police-force/england-location/routes')(router, viewContent);
require('../views/concepts/police-force/england-forces/routes')(router, viewContent);
require('../views/concepts/police-force/scotland-location/routes')(router, viewContent);
require('../views/concepts/police-force/wales-location/routes')(router, viewContent);
require('../views/concepts/police-force/welsh-forces/routes')(router, viewContent);
require('../views/concepts/police-force/somewhere-else/routes')(router, viewContent);

// Timeout Screens //
require('../views/concepts/timeout/timed-out/routes')(router, viewContent);

// Guidance Concept //
require('../views/concepts/guidance/routes')(router, viewContent);

//SRR Prototype //
require('../views/srr/previous-applications/routes')(router, viewContent);
require('../views/srr/name/routes')(router, viewContent);
require('../views/srr/phone-number/routes')(router, viewContent);
require('../views/srr/name-have-other/routes')(router, viewContent);
require('../views/srr/other-names/routes')(router, viewContent);
require('../views/srr/address/routes')(router, viewContent);
require('../views/srr/date-of-birth/routes')(router, viewContent);
require('../views/srr/preferred-days/routes')(router, viewContent);
require('../views/srr/preferred-times/routes')(router, viewContent);
require('../views/srr/check-your-answers-page/routes')(router, viewContent);


//Police Force Mockups Oct 2019 //

require('../views/concepts/forces-mockups/v1/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/england-location/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/do-you-know-offender/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/incident-location/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/police-force/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/scotland-location/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/somewhere-else/routes')(router, viewContent);
require('../views/concepts/forces-mockups/v1/wales-location/routes')(router, viewContent);


//Police Force Concept V2 Prototype //
require('../views/concepts/police-force-V2/routes')(router, viewContent);
require('../views/concepts/police-force-V2/force-search/routes')(router, viewContent);

//Police Force Concept V3 Prototype //
require('../views/concepts/police-force-V3/routes')(router, viewContent);
require('../views/concepts/police-force-V3/country/routes')(router, viewContent);
require('../views/concepts/police-force-V3/scotland-forces/routes')(router, viewContent);
require('../views/concepts/police-force-V3/england-forces/routes')(router, viewContent);
require('../views/concepts/police-force-V3/wales-forces/routes')(router, viewContent);
require('../views/concepts/police-force-V3/somewhere-else/routes')(router, viewContent);
require('../views/concepts/police-force-V3/crime-reference/routes')(router, viewContent);
require('../views/concepts/police-force-V3/incident-date/routes')(router, viewContent);
require('../views/concepts/police-force-V3/location/routes')(router, viewContent);
require('../views/concepts/police-force-V3/single-or-multiple-incidents/routes')(router, viewContent);
require('../views/concepts/police-force-V3/do-you-know-offender/routes')(router, viewContent);

//Police Force Concept V4 AS IS Prototype //
require('../views/concepts/police-force-V4/routes')(router, viewContent);
require('../views/concepts/police-force-V4/force/routes')(router, viewContent);
require('../views/concepts/police-force-V4/country/routes')(router, viewContent);
require('../views/concepts/police-force-V4/scotland-location/routes')(router, viewContent);
require('../views/concepts/police-force-V4/england-location/routes')(router, viewContent);
require('../views/concepts/police-force-V4/wales-location/routes')(router, viewContent);
require('../views/concepts/police-force-V4/somewhere-else/routes')(router, viewContent);
require('../views/concepts/police-force-V4/crime-reference/routes')(router, viewContent);
require('../views/concepts/police-force-V4/incident-date/routes')(router, viewContent);
require('../views/concepts/police-force-V4/incident-location/routes')(router, viewContent);
require('../views/concepts/police-force-V4/single-or-multiple-incidents/routes')(router, viewContent);
require('../views/concepts/police-force-V4/do-you-know-offender/routes')(router, viewContent);


// SMS + CONFIRMATION CHOICE //

require('../views/concepts/confirmation-choice/v1/address-manually/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v1/have-email-address/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v1/email-address/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v1/phone-number/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v1/mobile-number/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v1/check-your-answers-page/routes')(router, viewContent);

require('../views/concepts/confirmation-choice/v2/declaration/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/british-citizen/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/over-18/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/who-is-making-the-application/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/sexual-assault-application/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/rest-of-application/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/confirmation-options/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/address-manually/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/email-address/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/phone-number/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/transition/routes')(router, viewContent);
require('../views/concepts/confirmation-choice/v2/check-your-answers-page/routes')(router, viewContent);


// Incident Type
require('../views/concepts/indicent-type/option-c/context-about-the-crime/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-c/sexual-assault-application/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-c/crime-of-violence/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-c/incident-description/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-c/not-crime-violence/routes')(router, viewContent);

require('../views/concepts/indicent-type/option-d/context-about-the-crime/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-d/sexual-assault-application/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-d/crime-of-violence/routes')(router, viewContent);
require('../views/concepts/indicent-type/option-d/not-crime-violence/routes')(router, viewContent);

//Extra questions & equal oportunities //
require('../views/concepts/survey/routes')(router, viewContent);

//Equality questions //
require('../views/concepts/equality-questions/concept-1-hmcts/routes')(router, viewContent);
require('../views/concepts/equality-questions/concept-2-gds/routes')(router, viewContent);



// Add your routes here - above the module.exports line
module.exports = router;
