module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/address-org', function (req, res) {

    var confirmationPreference = req.session.data['confirmationPreference']

    if (confirmationPreference === 'Email') {
      // Redirect to the relevant page
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/phone-number')
    } else if (confirmationPreference === 'Text') {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/email-address-org')
    }

  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/address-org/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_1-rep-details/address-org/index', content)
  })
  // END__######################################################################################################
}
