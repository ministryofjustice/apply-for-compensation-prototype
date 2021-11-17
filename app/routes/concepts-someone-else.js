// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('../routes-content');
const utils = require('../utils')

//------------------------------------------------------------------------------------------//
// CONCEPTS AND IDEATION                                                                    //
// This routes file  contains the routes for the Applying for someone else journey concepts //
//------------------------------------------------------------------------------------------//


// MINORS JOURNEY Based on MVP VOSAA Journey - Late 2019 / Early 2020 //

require('../views/concepts/applying-for-someone-else/minors/care-order/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/care-order-details/routes')(router, viewContent);

require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-1/upload-choice/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-1/upload/routes')(router, viewContent);

require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload-choice/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/confirm-names/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload-other-names/routes')(router, viewContent);

require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-choice/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/confirm-names/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-name-change/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another-document/routes')(router, viewContent);


// Add your routes here - above the module.exports line
module.exports = router;
