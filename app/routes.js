// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('./routes-content');
const utils = require('./utils')

// Route index page
router.get('/', function (req, res) {
    res.render('index')
})



// MAIN PROTOTYPE //
// This routes file only contains the routes for the main prototype to keep things simpler //


// 1 - Qualifying questions

require('./views/application/_1-qualifying/crime-reference/routes')(router, viewContent);
require('./views/application/_1-qualifying/fatal-application/routes')(router, viewContent);
require('./views/application/_1-qualifying/who-is-making-the-application/routes')(router, viewContent);
require('./views/application/_1-qualifying/incident-reported/routes')(router, viewContent);
require('./views/application/_1-qualifying/over-18/routes')(router, viewContent);
require('./views/application/_1-qualifying/british-citizen/routes')(router, viewContent);

// 2 - Your details
require('./views/application/_2-your-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_2-your-details/address/routes')(router, viewContent);
require('./views/application/_2-your-details/context-your-details/routes')(router, viewContent);
require('./views/application/_2-your-details/date-of-birth/routes')(router, viewContent);
require('./views/application/_2-your-details/email-address/routes')(router, viewContent);
require('./views/application/_2-your-details/name/routes')(router, viewContent);
require('./views/application/_2-your-details/name-have-other/routes')(router, viewContent);
require('./views/application/_2-your-details/name-other/routes')(router, viewContent);
require('./views/application/_2-your-details/phone-number/routes')(router, viewContent);

// 3 Incident details
require('./views/application/_3-incident-details/application-delay/routes')(router, viewContent);
require('./views/application/_3-incident-details/context-incident-details/routes')(router, viewContent);
require('./views/application/_3-incident-details/crime-reference/routes')(router, viewContent);
require('./views/application/_3-incident-details/crime-reported-date/routes')(router, viewContent);
require('./views/application/_3-incident-details/england-location/routes')(router, viewContent);
require('./views/application/_3-incident-details/incident-date/routes')(router, viewContent);
require('./views/application/_3-incident-details/incident-location/routes')(router, viewContent);
require('./views/application/_3-incident-details/incident-type/routes')(router, viewContent);
require('./views/application/_3-incident-details/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/_3-incident-details/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/_3-incident-details/police-force/routes')(router, viewContent);
require('./views/application/_3-incident-details/reporting-delay/routes')(router, viewContent);
require('./views/application/_3-incident-details/scotland-location/routes')(router, viewContent);
require('./views/application/_3-incident-details/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/_3-incident-details/somewhere-else/routes')(router, viewContent);
require('./views/application/_3-incident-details/wales-location/routes')(router, viewContent);
require('./views/application/_3-incident-details/own-words-question/routes')(router, viewContent);
require('./views/application/_3-incident-details/own-words/routes')(router, viewContent);

// 4 offender

require('./views/application/_4-offender/contact-with-offender/routes')(router, viewContent);
require('./views/application/_4-offender/context-contact-with-offender/routes')(router, viewContent);
require('./views/application/_4-offender/do-you-know-offender-name/routes')(router, viewContent);
require('./views/application/_4-offender/offender-name/routes')(router, viewContent);
require('./views/application/_4-offender/what-is-relationship/routes')(router, viewContent);

// 5 Injuries

require('./views/application/_5-injuries/context-physical-injuries/routes')(router, viewContent);
require('./views/application/_5-injuries/have-physical-injuries/routes')(router, viewContent);
require('./views/application/_5-injuries/infection/routes')(router, viewContent);
require('./views/application/_5-injuries/context-pregnancy/routes')(router, viewContent);
require('./views/application/_5-injuries/pregnancy/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/arm/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/hand/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/skin/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/leg/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/foot/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/hip/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/knee/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/toes/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/skin/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/back/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/chest/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/skin/routes')(router, viewContent);
require('./views/application/_5-injuries/injured-body-parts/torso/tissue/routes')(router, viewContent);
require('./views/application/_5-injuries/context-about-dmi/routes')(router, viewContent);
require('./views/application/_5-injuries/dmi/routes')(router, viewContent);
require('./views/application/_5-injuries/dmi-duration/routes')(router, viewContent);
require('./views/application/_5-injuries/how-it-affected-you/routes')(router, viewContent);


// 6 Treatment

require('./views/application/_6-treatment/treatment-details/routes')(router, viewContent);
require('./views/application/_6-treatment/finished-treatment/routes')(router, viewContent);
require('./views/application/_6-treatment/dmi-treatment-types/routes')(router, viewContent);
require('./views/application/_6-treatment/context-treatment/routes')(router, viewContent);
require('./views/application/_6-treatment/gp-details/routes')(router, viewContent);
require('./views/application/_6-treatment/gp-registered/routes')(router, viewContent);
require('./views/application/_6-treatment/gp-visited/routes')(router, viewContent);
require('./views/application/_6-treatment/hospital-visited/routes')(router, viewContent);
require('./views/application/_6-treatment/hospital-details/routes')(router, viewContent);
require('./views/application/_6-treatment/dentist-visited/routes')(router, viewContent);
require('./views/application/_6-treatment/dentist-details/routes')(router, viewContent);

// 7 Financial Losses

require('./views/application/_7-financial-losses/context-your-money/routes')(router, viewContent);
require('./views/application/_7-financial-losses/lost-earnings/routes')(router, viewContent);
require('./views/application/_7-financial-losses/work-capacity/routes')(router, viewContent);
require('./views/application/_7-financial-losses/work-details/routes')(router, viewContent);
require('./views/application/_7-financial-losses/special-expenses/routes')(router, viewContent);

// 8 Other comp

require('./views/application/_8-other-comp/context-prev-compensation/routes')(router, viewContent);
require('./views/application/_8-other-comp/other-compensation/routes')(router, viewContent);
require('./views/application/_8-other-comp/other-compensation-amount/routes')(router, viewContent);
require('./views/application/_8-other-comp/other-compensation-decision/routes')(router, viewContent);
require('./views/application/_8-other-comp/other-compensation-provider/routes')(router, viewContent);
require('./views/application/_8-other-comp/other-compensation-when/routes')(router, viewContent);
require('./views/application/_8-other-comp/other-compensation-why-not/routes')(router, viewContent);
require('./views/application/_8-other-comp/previous-applications/routes')(router, viewContent);

// 9 Additional info

require('./views/application/_9-additional-info/context-additional-info/routes')(router, viewContent);
require('./views/application/_9-additional-info/additional-info-question/routes')(router, viewContent);
require('./views/application/_9-additional-info/additional-info-details/routes')(router, viewContent);

// End Screens
require('./views/application/_10-end/check-your-answers-page/routes')(router, viewContent);
require('./views/application/_10-end/declaration/routes')(router, viewContent);



// DO NOT DELETE THE FOLLOWING
router.use('/', require('./routes/concepts.js'))
router.use('/', require('./routes/concepts-injuries.js'))
router.use('/', require('./routes/concepts-someone-else.js'))
require('./routes-filelist')(router);

// Add your routes here - above the module.exports line
module.exports = router;
