const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/index', content)
  })

  // END__######################################################################################################
}
