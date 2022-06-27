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
require('../views/concepts/parents-applying-for-minors/minors/care-order-context/option-1/care-order/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/care-order-context/option-1/care-order-details/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order-details/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/care-order-context/option-3/care-order/routes')(router, viewContent);

//Filter non-parents //
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/parent-guardian/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/authority-to-apply/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian-proof/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/authority-to-apply/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/parent-guardian/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/birth-certificate-proof/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/birth-certificate/routes')(router, viewContent);
require('../views/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/other-proof/routes')(router, viewContent);

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


// Divert duplicate applications

require('../views/concepts/divert-duplicate-apps/routes')(router, viewContent);



//--------------------------------------------------------//
// THIRD PARTY REPS                                       //
//--------------------------------------------------------//

// Download a summary of an application

require('../views/concepts/third-party-reps/download-a-copy/screen-between/download-a-summary/routes')(router, viewContent);
require('../views/concepts/third-party-reps/download-a-copy/screen-between-v3/download-question/routes')(router, viewContent);
require('../views/concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/routes')(router, viewContent);


// 00 - start and qualifying
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/fatal-application/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/who-is-making-the-application/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/british-citizen/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_00-start-and-qualifying/british-citizen/they/routes')(router, viewContent);

// 01 - victim details
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/name/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/name/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/name-have-other/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/name-have-other/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/name-other/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/name-other/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/address/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/address/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/phone-number/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/phone-number/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_01-victim-details/email-address/routes')(router, viewContent);

// 02 - main applicant details
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/over18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/under18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have/over18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have/under18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-does-someone-else-have/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/name/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/name/under18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/name/over18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/address/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/address/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/they/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/are-you-their-parent/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/under18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/you/over18/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/you/under18/routes')(router, viewContent);

// 03 - rep details
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/rep-type/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/organisation-name/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/address/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/company-reg-no/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/confirmation-options/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/email-address/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/name/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/phone-number/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question/routes')(router, viewContent);

// 04 - incident details (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/context-incident-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reference/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-date/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-type/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/period-of-abuse-end/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/period-of-abuse-start/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/police-force/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/scotland-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/single-or-multiple-incidents/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/somewhere-else/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/wales-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/own-words-question/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/routes')(router, viewContent);

// 04 - incident details (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/application-delay/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/context-incident-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/crime-reference/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/crime-reported-date/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/england-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-date/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/period-of-abuse-end/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/period-of-abuse-start/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/police-force/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/reporting-delay/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/single-or-multiple-incidents/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/somewhere-else/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/wales-location/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/routes')(router, viewContent);

// 05 - offender details (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_05-offender-adults/contact-with-offender/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-adults/context-contact-with-offender/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-adults/offender-name/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-adults/what-is-relationship/routes')(router, viewContent);

// 05 - offender details (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_05-offender-minors/contact-with-offender/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-minors/context-contact-with-offender/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-minors/offender-name/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship/routes')(router, viewContent);

// 06 - injury details (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/context-physical-injuries/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/have-physical-injuries/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/infection/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/context-pregnancy/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/pregnancy/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/arm/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/elbow/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/hand/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/shoulder/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/wrist/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/leg/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/ankle/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/foot/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/hip/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/knee/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/toes/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/abdomen/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/back/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/chest/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/genitals/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/shoulder/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/pelvis/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/context-about-dmi/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/dmi/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration/routes')(router, viewContent);

// 06 - injury details (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/have-physical-injuries/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/infection/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/context-pregnancy/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/pregnancy/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/arm/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/elbow/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/hand/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/shoulder/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/wrist/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/leg/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/ankle/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/foot/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/hip/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/knee/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/toes/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/abdomen/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/back/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/chest/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/genitals/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/shoulder/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/pelvis/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/skin/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/tissue/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/dmi/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_06-injuries-minors/dmi-duration/routes')(router, viewContent);

// 07 - impact (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/loe-context/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/loe-se-affected-daily-life/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working-how-long/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/loe-working/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/loe-working-why-not/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-any-other/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-context/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-home-alterations/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-home-care/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-nhs-treatment/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-physical-aids/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-adults/se-special-equipment/routes')(router, viewContent);

// 07 - impact (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-affected-six-months/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-affected-six-months-future/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-context/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-daily-capacity/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-se-affected-daily-life/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-se-future-capacity/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-stopped-working/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-stopped-working-how-long/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-working/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-working-age/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/loe-working-why-not/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-any-other/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-context/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-home-alterations/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-home-care/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-nhs-treatment/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-physical-aids/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_07-impact-minors/se-special-equipment/routes')(router, viewContent);

// 08 - treatment (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/treatment-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/finished-treatment/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/dmi-treatment-types/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/context-treatment/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/gp-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/gp-registered/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/gp-visited/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-visited/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-visited/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-details/routes')(router, viewContent);

// 08 - treatment (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/treatment-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/finished-treatment/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/dmi-treatment-types/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/context-treatment/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/gp-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/gp-registered/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/gp-visited/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-details/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-visited/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-details/routes')(router, viewContent);

// 09 - other compensation (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-amount/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-decision/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-provider/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-why-not/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications/routes')(router, viewContent);

// 09 - other compensation (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-amount/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-provider/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-when/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-why-not/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_09-other-comp-minors/previous-applications/routes')(router, viewContent);

// 10 - additional info (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_10-additional-info-adults/context-additional-info/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_10-additional-info-adults/additional-info-question/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_10-additional-info-adults/additional-info-details/routes')(router, viewContent);

// 10 - additional info (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_10-additional-info-minors/context-additional-info/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_10-additional-info-minors/additional-info-question/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_10-additional-info-minors/additional-info-details/routes')(router, viewContent);

// 11 - end screens (adults via reps)
  require('../views/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_11-end-adults/declaration/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/routes')(router, viewContent);

// 11 - end screens (minors via reps)
  require('../views/concepts/third-party-reps/prototype/_11-end-minors/check-your-answers-page/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_11-end-minors/declaration/routes')(router, viewContent);
  require('../views/concepts/third-party-reps/prototype/_11-end-minors/declaration-under-12/routes')(router, viewContent);



// Add your routes here - above the module.exports line
module.exports = router;
