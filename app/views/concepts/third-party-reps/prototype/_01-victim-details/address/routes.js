const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/address', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']
    var confirmationPreference = req.session.data['confirmationPreference']
    var over18 = req.session.data['over18']

    if (directApplicant === 'Myself') {
      // Get the answer from the query string

      if (confirmationPreference === 'Email') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/phone-number')
      } else if (confirmationPreference === 'Text') {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/email-address')
      }
    } else if ((directApplicant === 'Someone else') && (over18 === 'No')) {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/phone-number')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/address/index', content)
  })

  // END__######################################################################################################
}
