// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('./routes-content');
const utils = require('./utils')

// Work around a bug where occasionally _unchecked would appear
// Also coerce to array to be easier to work with
const cleanInputData = data => {
  if (!data || data == '_unchecked') {
    return undefined
  }
  else {
    data = [].concat(data) // coerce to arrays so we can filter them
    // _unchecked sometimes appears - can't track down what's causing it
    data = data.filter(item => item != '_unchecked')
    return (data.length == 0) ? undefined : data // return undefined if array now empty
  }
}

// Route index page
router.get('/', function (req, res) {
    res.render('index')
})



//-------------------------------//
//                               //
//         ADULT JOURNEY         //
//                               //
//-------------------------------//


// 0 - Start screen and qualifying questions
require('./views/application/_0-start-and-qualifying/start-page/routes')(router, viewContent);

require('./views/application/_0-start-and-qualifying/crime-reference/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/fatal-application/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/who-is-making-the-application/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/incident-reported/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/over-18-you/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/over-18-they/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/british-citizen-you/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/parent-guardian/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/british-citizen-they/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/parent-guardian/routes')(router, viewContent);
require('./views/application/_0-start-and-qualifying/authority-to-apply-minor/routes')(router, viewContent);

// 2 - Your details
require('./views/application/_1-adult/_2-your-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/address/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/context-your-details/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/date-of-birth/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/email-address/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/name/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/name-have-other/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/name-other/routes')(router, viewContent);
require('./views/application/_1-adult/_2-your-details/phone-number/routes')(router, viewContent);

// 3 Incident details
require('./views/application/_1-adult/_3-incident-details/application-delay/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/context-incident-details/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/crime-reference/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/crime-reported-date/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/england-location/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/incident-date/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/incident-location/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/incident-type/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/police-force/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/reporting-delay/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/scotland-location/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/somewhere-else/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/wales-location/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/own-words-question/routes')(router, viewContent);
require('./views/application/_1-adult/_3-incident-details/own-words/routes')(router, viewContent);

// 4 offender
require('./views/application/_1-adult/_4-offender/contact-with-offender/routes')(router, viewContent);
require('./views/application/_1-adult/_4-offender/context-contact-with-offender/routes')(router, viewContent);
require('./views/application/_1-adult/_4-offender/do-you-know-offender-name/routes')(router, viewContent);
require('./views/application/_1-adult/_4-offender/offender-name/routes')(router, viewContent);
require('./views/application/_1-adult/_4-offender/what-is-relationship/routes')(router, viewContent);

// 5 Injuries
require('./views/application/_1-adult/_5-injuries/context-physical-injuries/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/have-physical-injuries/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/infection/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/context-pregnancy/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/pregnancy/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/arm/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/hand/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/skin/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/leg/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/foot/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/hip/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/knee/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/toes/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/skin/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/back/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/chest/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/skin/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/injured-body-parts/torso/tissue/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/context-about-dmi/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/dmi/routes')(router, viewContent);
require('./views/application/_1-adult/_5-injuries/dmi-duration/routes')(router, viewContent);

// 6 Impact
require('./views/application/_1-adult/_6-impact/loe-context/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/loe-se-affected-daily-life/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/loe-stopped-working/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/loe-stopped-working-how-long/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/loe-working/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/loe-working-why-not/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-any-other/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-context/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-home-alterations/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-home-care/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-nhs-treatment/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-physical-aids/routes')(router, viewContent);
require('./views/application/_1-adult/_6-impact/se-special-equipment/routes')(router, viewContent);

// 7 Treatment
require('./views/application/_1-adult/_7-treatment/treatment-details/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/finished-treatment/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/dmi-treatment-types/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/context-treatment/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/gp-details/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/gp-registered/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/gp-visited/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/hospital-visited/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/hospital-details/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/dentist-visited/routes')(router, viewContent);
require('./views/application/_1-adult/_7-treatment/dentist-details/routes')(router, viewContent);

// 8 Other comp
require('./views/application/_1-adult/_8-other-comp/context-prev-compensation/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/other-compensation/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/other-compensation-amount/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/other-compensation-decision/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/other-compensation-provider/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/other-compensation-when/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/other-compensation-why-not/routes')(router, viewContent);
require('./views/application/_1-adult/_8-other-comp/previous-applications/routes')(router, viewContent);

// 9 Additional info
require('./views/application/_1-adult/_9-additional-info/context-additional-info/routes')(router, viewContent);
require('./views/application/_1-adult/_9-additional-info/additional-info-question/routes')(router, viewContent);
require('./views/application/_1-adult/_9-additional-info/additional-info-details/routes')(router, viewContent);

// End Screens
require('./views/application/_1-adult/_10-end/check-your-answers-page/routes')(router, viewContent);
require('./views/application/_1-adult/_10-end/declaration/routes')(router, viewContent);


//-------------------------------//
//                               //
//         MINOR JOURNEY         //
//                               //
//-------------------------------//


// 2 - Your details
require('./views/application/_2-minors/_2-your-details/context-your-details/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/name/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/what-is-relationship/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/do-you-share-responsibility/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/responsibility-who-with/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/care-order/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/care-order-details/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/address/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/email-address/routes')(router, viewContent);
require('./views/application/_2-minors/_2-your-details/phone-number/routes')(router, viewContent);

// 2 - Victim details
require('./views/application/_2-minors/_2-victim-details/context-victim-details/routes')(router, viewContent);
require('./views/application/_2-minors/_2-victim-details/name/routes')(router, viewContent);
require('./views/application/_2-minors/_2-victim-details/name-have-other/routes')(router, viewContent);
require('./views/application/_2-minors/_2-victim-details/name-other/routes')(router, viewContent);
require('./views/application/_2-minors/_2-victim-details/date-of-birth/routes')(router, viewContent);
require('./views/application/_2-minors/_2-victim-details/address/routes')(router, viewContent);

// 3 Incident details
require('./views/application/_2-minors/_3-incident-details/application-delay/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/context-incident-details/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/crime-reference/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/crime-reported-date/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/england-location/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/incident-date/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/incident-location/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/incident-type/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/police-force/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/reporting-delay/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/scotland-location/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/somewhere-else/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/wales-location/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/own-words-question/routes')(router, viewContent);
require('./views/application/_2-minors/_3-incident-details/own-words/routes')(router, viewContent);

// 4 offender
require('./views/application/_2-minors/_4-offender/contact-with-offender/routes')(router, viewContent);
require('./views/application/_2-minors/_4-offender/context-contact-with-offender/routes')(router, viewContent);
require('./views/application/_2-minors/_4-offender/do-you-know-offender-name/routes')(router, viewContent);
require('./views/application/_2-minors/_4-offender/offender-name/routes')(router, viewContent);
require('./views/application/_2-minors/_4-offender/what-is-relationship/routes')(router, viewContent);

// 5 Injuries
require('./views/application/_2-minors/_5-injuries/context-physical-injuries/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/have-physical-injuries/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/infection/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/context-pregnancy/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/pregnancy/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/arm/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/hand/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/skin/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/leg/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/foot/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/hip/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/knee/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/toes/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/skin/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/back/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/chest/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/skin/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/injured-body-parts/torso/tissue/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/context-about-dmi/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/dmi/routes')(router, viewContent);
require('./views/application/_2-minors/_5-injuries/dmi-duration/routes')(router, viewContent);

// 6 Treatment
require('./views/application/_2-minors/_7-treatment/treatment-details/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/finished-treatment/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/dmi-treatment-types/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/context-treatment/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/gp-details/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/gp-registered/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/gp-visited/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/hospital-visited/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/hospital-details/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/dentist-visited/routes')(router, viewContent);
require('./views/application/_2-minors/_7-treatment/dentist-details/routes')(router, viewContent);

// 7 Impact
require('./views/application/_2-minors/_6-impact/loe-affected-six-months/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-affected-six-months-future/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-context/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-daily-capacity/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-se-affected-daily-life/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-se-future-capacity/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-stopped-working/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-stopped-working-how-long/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-working/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-working-age/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/loe-working-why-not/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-any-other/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-context/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-home-alterations/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-home-care/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-nhs-treatment/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-physical-aids/routes')(router, viewContent);
require('./views/application/_2-minors/_6-impact/se-special-equipment/routes')(router, viewContent);

// 8 Other comp
require('./views/application/_2-minors/_8-other-comp/context-prev-compensation/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/other-compensation/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/other-compensation-amount/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/other-compensation-decision/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/other-compensation-provider/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/other-compensation-when/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/other-compensation-why-not/routes')(router, viewContent);
require('./views/application/_2-minors/_8-other-comp/previous-applications/routes')(router, viewContent);

// 9 Additional info
require('./views/application/_2-minors/_9-additional-info/context-additional-info/routes')(router, viewContent);
require('./views/application/_2-minors/_9-additional-info/additional-info-question/routes')(router, viewContent);
require('./views/application/_2-minors/_9-additional-info/additional-info-details/routes')(router, viewContent);

// 10 End Screens
require('./views/application/_2-minors/_10-end/check-your-answers-page/routes')(router, viewContent);
require('./views/application/_2-minors/_10-end/declaration/routes')(router, viewContent);
require('./views/application/_2-minors/_10-end/declaration-under-12/routes')(router, viewContent);


//-------------------------------//
//                               //
//        THIRD PARTY REPS       //
//         ADULT JOURNEY         //
//                               //
//-------------------------------//

// 1 - Rep details
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/context-rep-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-type/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/name-org/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/address-org/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/phone-number/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/email-address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/company-reg-no/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-ref-no-question/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-ref-no/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_1-rep-details/main-contact-name/routes')(router, viewContent);

// 2 - Your details
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/context-your-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/date-of-birth/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/email-address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/name-have-other/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/name-other/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/phone-number/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/capable-own-affairs/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/are-you-responsible/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/someone-else-responsible/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_2-your-details/authority-to-apply-adult/routes')(router, viewContent);

// 3 - Capable adult
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/email-address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/have-responsibility/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/phone-number/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/authority-to-apply-adult/routes')(router, viewContent);


// 3 Incident details
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/application-delay/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/crime-reference/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/crime-reported-date/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/incident-date/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/incident-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/incident-type/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/police-force/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/reporting-delay/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/scotland-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/somewhere-else/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/wales-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/own-words-question/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_3-incident-details/own-words/routes')(router, viewContent);

// 4 offender
require('./views/application/_3-3rd-party-reps/_1-adult/_4-offender/contact-with-offender/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_4-offender/context-contact-with-offender/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_4-offender/do-you-know-offender-name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_4-offender/offender-name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_4-offender/what-is-relationship/routes')(router, viewContent);

// 5 Injuries
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/context-physical-injuries/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/have-physical-injuries/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/infection/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/context-pregnancy/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/pregnancy/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/arm/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/hand/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/leg/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/foot/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/hip/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/knee/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/toes/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/back/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/chest/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/injured-body-parts/torso/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/context-about-dmi/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi-duration/routes')(router, viewContent);

// 6 Impact
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-context/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-se-affected-daily-life/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-stopped-working/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-stopped-working-how-long/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-working/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-working-why-not/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-any-other/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-context/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-home-alterations/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-home-care/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-nhs-treatment/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-physical-aids/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_6-impact/se-special-equipment/routes')(router, viewContent);

// 7 Treatment
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/treatment-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/finished-treatment/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/dmi-treatment-types/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/context-treatment/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/gp-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/gp-registered/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/gp-visited/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/hospital-visited/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/hospital-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/dentist-visited/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_7-treatment/dentist-details/routes')(router, viewContent);

// 8 Other comp
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/context-prev-compensation/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/other-compensation/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/other-compensation-amount/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/other-compensation-decision/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/other-compensation-provider/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/other-compensation-when/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/other-compensation-why-not/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_8-other-comp/previous-applications/routes')(router, viewContent);

// 9 Additional info
require('./views/application/_3-3rd-party-reps/_1-adult/_9-additional-info/context-additional-info/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_9-additional-info/additional-info-question/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_9-additional-info/additional-info-details/routes')(router, viewContent);

// End Screens
require('./views/application/_3-3rd-party-reps/_1-adult/_10-end/check-your-answers-page/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_10-end/declaration/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/routes')(router, viewContent);


//-------------------------------//
//                               //
//        THIRD PARTY REPS       //
//         MINOR JOURNEY         //
//                               //
//-------------------------------//


// 2 - Rep details
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/context-rep-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-type/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/name-org/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/address-org/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/phone-number/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/email-address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/company-reg-no/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no-question/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no/routes')(router, viewContent);

// 2 - Your details
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/context-your-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/confirmation-options/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/what-is-relationship/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/do-you-share-responsibility/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsibility-who-with/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/email-address/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/phone-number/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/authority-to-apply-minor/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsible-org/routes')(router, viewContent);

// 2 - Victim details
require('./views/application/_3-3rd-party-reps/_2-minors/_2-victim-details/context-victim-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name-have-other/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name-other/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-victim-details/date-of-birth/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/routes')(router, viewContent);

// 3 Incident details
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/application-delay/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/context-incident-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/crime-reference/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/crime-reported-date/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/england-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/incident-date/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/incident-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/incident-type/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-end/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/police-force/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/scotland-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/single-or-multiple-incidents/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/somewhere-else/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/wales-location/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words-question/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/routes')(router, viewContent);

// 4 offender
require('./views/application/_3-3rd-party-reps/_2-minors/_4-offender/contact-with-offender/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_4-offender/context-contact-with-offender/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_4-offender/do-you-know-offender-name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_4-offender/offender-name/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_4-offender/what-is-relationship/routes')(router, viewContent);

// 5 Injuries
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/context-physical-injuries/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/have-physical-injuries/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/infection/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/context-pregnancy/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/pregnancy/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/arm/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/hand/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/leg/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/foot/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/hip/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/knee/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/toes/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/back/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/chest/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/skin/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/tissue/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/context-about-dmi/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi-duration/routes')(router, viewContent);

// 6 Treatment
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/treatment-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/finished-treatment/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/dmi-treatment-types/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/context-treatment/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-registered/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-visited/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/hospital-visited/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/hospital-details/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/dentist-visited/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_7-treatment/dentist-details/routes')(router, viewContent);

// 7 Impact
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-affected-six-months/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-affected-six-months-future/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-context/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-daily-capacity/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-se-affected-daily-life/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-se-future-capacity/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-stopped-working/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-stopped-working-how-long/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-working/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-working-age/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-working-why-not/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-any-other/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-context/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-home-alterations/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-home-care/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-nhs-treatment/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-physical-aids/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_6-impact/se-special-equipment/routes')(router, viewContent);

// 8 Other comp
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/context-prev-compensation/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-decision/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-provider/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-when/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-why-not/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_8-other-comp/previous-applications/routes')(router, viewContent);

// 9 Additional info
require('./views/application/_3-3rd-party-reps/_2-minors/_9-additional-info/context-additional-info/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_9-additional-info/additional-info-question/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_9-additional-info/additional-info-details/routes')(router, viewContent);

// 10 End Screens
require('./views/application/_3-3rd-party-reps/_2-minors/_10-end/check-your-answers-page/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_10-end/declaration/routes')(router, viewContent);
require('./views/application/_3-3rd-party-reps/_2-minors/_10-end/declaration-under-12/routes')(router, viewContent);



// DO NOT DELETE THE FOLLOWING
router.use('/', require('./routes/concepts.js'))
router.use('/', require('./routes/concepts-injuries.js'))
router.use('/', require('./routes/concepts-someone-else.js'))
require('./routes-filelist')(router);

// Add your routes here - above the module.exports line
module.exports = router;
