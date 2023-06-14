const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/address/you', function (req, res) {

    var confirmationPreference = req.session.data['confirmationPreference']
    var over18 = req.session.data['over18']

      if (confirmationPreference === 'Email') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/phone-number/you')
      } else if (confirmationPreference === 'Text') {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/email-address')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/address/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/address/you/index', content)
  })

  // END__######################################################################################################
}
