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

//Care order context //
require('../views/concepts/applying-for-someone-else/minors/care-order-context/option-1/care-order/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/care-order-context/option-1/care-order-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/care-order-context/option-3/care-order/routes')(router, viewContent);

//Filter non-parents //
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-1/parent-guardian/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-2/authority-to-apply/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-2/parent-guardian/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-2/parent-guardian-proof/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/authority-to-apply/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/parent-guardian/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate-proof/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/other-proof/routes')(router, viewContent);

//Minors loss of earnings and special expenses//
require('../views/concepts/minors-loe-se/option-1/loe-context/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-education/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-se-future-capacity/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-stopped-working/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-stopped-working-how-long/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-working/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-working-age/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/loe-working-why-not/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/se-any-other/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/se-context/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/se-home-alterations/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/se-home-care/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/se-nhs-treatment/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-1/se-physical-aids/routes')(router, viewContent);

require('../views/concepts/minors-loe-se/option-2/loe-capacity/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/loe-context/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/loe-not-working-why/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/loe-stopped-working/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/loe-stopped-working-how-long/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/loe-working/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/se-context/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-2/se-expenses/routes')(router, viewContent);

require('../views/concepts/minors-loe-se/option-3/loe-context/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-working-age/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-working/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-stopped-working/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-working-why-not/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-stopped-working-how-long/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-se-future-capacity/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-se-affected-daily-life/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-daily-capacity/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-affected-six-months/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/loe-affected-six-months-future/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/se-any-other/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/se-context/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/se-home-alterations/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/se-home-care/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/se-nhs-treatment/routes')(router, viewContent);
require('../views/concepts/minors-loe-se/option-3/se-physical-aids/routes')(router, viewContent);


// Save and return

require('../views/concepts/save-and-return-pre/resume-claim-screen/option-2/save-and-return-number/routes')(router, viewContent);

  // Save and return - Option 1

  require('../views/concepts/save-and-return-pre/option-1/resume-a-claim/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/one-time-password/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/application-progress/routes')(router, viewContent);

  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/context-your-details/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/date-of-birth/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/email-address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/name/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/name-have-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/name-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-1/_2-your-details/phone-number/routes')(router, viewContent);

  // Save and return - Option 2

  require('../views/concepts/save-and-return-pre/option-2/resume-a-claim/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/application-progress/routes')(router, viewContent);

  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/memorable-word/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/context-your-details/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/date-of-birth/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/email-address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/name/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/name-have-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/name-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-2/_2-your-details/phone-number/routes')(router, viewContent);


  // Save and return - Option 3

  require('../views/concepts/save-and-return-pre/option-3/application-progress/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/send-confirmation-question/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/resume-unique-token/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/resume-passcode/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/link-email/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/link-telephone/routes')(router, viewContent);


  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/context-your-details/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/date-of-birth/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/email-address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/name/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/name-have-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/name-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-pre/option-3/_2-your-details/phone-number/routes')(router, viewContent);


  // Save and return - post-kick off work

  require('../views/concepts/save-and-return-post/i-means-of-saving/save-button/routes')(router, viewContent);

  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/application-progress/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-unique-token/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-passcode/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/credentials/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/mismatch/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/context-your-details/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/date-of-birth/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/email-address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/name/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/name-have-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/name-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/phone-number/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/freetext/routes')(router, viewContent);

  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/application-progress/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/resume-unique-token/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/resume-passcode/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/credentials/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/mismatch/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/context-your-details/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/date-of-birth/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/email-address/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-have-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-other/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/phone-number/routes')(router, viewContent);
  require('../views/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext/routes')(router, viewContent);

  require('../views/concepts/save-and-return-post/mvp-proto/user-or-system-gen-pw/password-choice/routes')(router, viewContent);




// Add your routes here - above the module.exports line
module.exports = router;
