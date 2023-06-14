// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('../routes-content');
const utils = require('../utils')

//-------------------------------------------------------------------------------//
// CONCEPTS AND IDEATION                                                         //
// This routes file  contains the routes for the injuries and treatment concepts //
//-------------------------------------------------------------------------------//


// MENTAL INJURIES //

require('../views/concepts/mental-injuries/v1/mental-health/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/duration/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/diagnosis/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/clinical-psychologist/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/getting-treatment/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/treatment-details/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/gp-details/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/waiting-for-diagnosis/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v1/diagnosed-by/routes')(router, viewContent);

require('../views/concepts/mental-injuries/v2/mental-health/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v2/duration/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v2/no-mental-injury/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v2/getting-treatment/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v2/diagnosis/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v2/clinical-psychologist/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v2/gp-details/routes')(router, viewContent);


require('../views/concepts/mental-injuries/v3/registered-with-gp/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/visited-gp/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/gp-details/routes')(router, viewContent);

require('../views/concepts/mental-injuries/v3/dmi/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/mental-health/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/no-mental-injury/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/mental-health-more-info/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/duration/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/getting-treatment/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/treatment-types/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v3/practitioners/routes')(router, viewContent);

require('../views/concepts/mental-injuries/v4/registered-with-gp/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/visited-gp/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/gp-details/routes')(router, viewContent);

require('../views/concepts/mental-injuries/v4/dmi/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/mental-health/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/no-mental-injury/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/mental-health-more-info/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/duration/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/treatment-types/routes')(router, viewContent);
require('../views/concepts/mental-injuries/v4/getting-treatment/routes')(router, viewContent);


// CONCEPTS Physical injuries questions //

require('../views/concepts/physical-injuries/basic-autocomplete/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/basic-autocomplete/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/advanced-autocomplete/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/advanced-autocomplete/have-physical-injuries/routes')(router, viewContent);

require('../views/concepts/physical-injuries/free-text/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/body-part/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/have-other-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/non-specific/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/injured-parts/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/physical-injuries-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/free-text/your-injuries/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/non-specific/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/injured-body-parts/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/head-surface/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/neck-surface/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/face-surface/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/head-brain/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/eye-sight/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/face/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page//arms/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/arm/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/elbow/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/finger-thumb/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/hand/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/shoulder/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/wrist/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/arms/injuries/surface/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page/torso/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/abdomen/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/back/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/chest/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/collar-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/tail-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/genitals/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/internal-organs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/ribs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/shoulder-blade/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/breast-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/torso/injuries/surface/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page/legs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/ankle/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/foot/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/hip/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/knee/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/leg/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/toes/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page/legs/injuries/surface/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page/your-injuries/routes')(router, viewContent);


// One question per page v2

require('../views/concepts/physical-injuries/one-q-page-v2/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/injured-body-parts/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-surface/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/neck-surface/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/face-surface/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-brain/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/ear-hearing/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/eye-sight/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/face/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/nose/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/ear-hearing/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/teeth/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/tongue/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v2//arms/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/arm/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/elbow/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/finger-thumb/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/hand/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/shoulder/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/wrist/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/arms/injuries/surface/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v2/torso/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/abdomen/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/back/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/chest/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/collar-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/tail-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/genitals/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/internal-organs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/ribs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/shoulder-blade/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/breast-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/torso/injuries/surface/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v2/legs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/ankle/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/foot/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/hip/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/knee/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/leg/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/legs/injuries/surface/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v2/your-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v2/other-injuries-details/routes')(router, viewContent);


// One question per page v3

require('../views/concepts/physical-injuries/one-q-page-v3/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/soft-tissue/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/paralysis/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/infection/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/pregnancy-loss/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/other-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/arm/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/hand/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/tongue/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/teeth/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/leg/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/foot/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/hip/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/knee/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/toes/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/back/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/breast-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/chest/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/collar-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/internal-organs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/ribs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/tail-bone/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/pelvis/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v3/your-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/treatment/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/treatment-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/context-about-dmi/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/dmi/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/dmi-duration/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/dmi-finished-treatment/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/dmi-treatment-types/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/dmi-more-info/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/context-medical-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/gp-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/gp-registered/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/gp-visited/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/hospital-visited/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/hospital-details/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v3/context-your-money/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/loss-earnings-claim/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/returned-work/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/returned-work-date/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/work-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v3/special-expenses/routes')(router, viewContent);


// One question per page v4

require('../views/concepts/physical-injuries/one-q-page-v4/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/infection/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/pregnancy/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/arm/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/hand/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/skin/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/leg/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/foot/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/hip/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/knee/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/toes/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/skin/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/back/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/chest/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/skin/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/tissue/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v4/your-injuries/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/treatment/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/treatment-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/context-about-dmi/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/dmi/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/dmi-duration/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/finished-treatment/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/dmi-treatment-types/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/how-it-affected-you/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/context-treatment/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/gp-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/gp-registered/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/gp-visited/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/hospital-visited/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/hospital-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/dentist-visited/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/dentist-details/routes')(router, viewContent);

require('../views/concepts/physical-injuries/one-q-page-v4/context-your-money/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/lost-earnings/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/work-capacity/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/work-details/routes')(router, viewContent);
require('../views/concepts/physical-injuries/one-q-page-v4/special-expenses/routes')(router, viewContent);

// Dentist details
require('../views/concepts/dental-treatment/dentist-visited/routes')(router, viewContent);
require('../views/concepts/dental-treatment/dentist-details/routes')(router, viewContent);

//Extra questions & equal oportunities //
require('../views/concepts/survey/routes')(router, viewContent);


// Add your routes here - above the module.exports line
module.exports = router;
