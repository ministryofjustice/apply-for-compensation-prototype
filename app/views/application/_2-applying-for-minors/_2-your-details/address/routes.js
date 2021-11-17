module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/application/_2-applying-for-minors/_2-your-details/address', function (req, res) {
    // Get the answer from the query string
    var confirmationPreference = req.session.data['confirmationPreference']

    if (confirmationPreference === 'Email') {
      // Redirect to the relevant page
      res.redirect('/application/_2-applying-for-minors/_2-your-details/phone-number')
    } else if (confirmationPreference === 'Text') {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-applying-for-minors/_2-your-details/email-address')
    }
  })

  router.post('/application/_2-applying-for-minors/_2-your-details/address', function (req, res) {

    var emailConfirmation = req.session.data['minor-direct-applicant']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_2-applying-for-minors/_10-end/check-your-answers-page')
    }
    res.redirect('/application/_2-applying-for-minors/_2-your-details/phone-number')
  })
  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-your-details/address/', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/address/index', content)
  })

  router.get('/application/_2-applying-for-minors/_2-your-details/address/error-building-street-blank', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/address/error-building-street-blank', content)
  })

  router.get('/application/_2-applying-for-minors/_2-your-details/address/error-town-city-blank', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/address/error-town-city-blank', content)
  })

  router.get('/application/_2-applying-for-minors/_2-your-details/address/error-postcode', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/address/error-postcode', content)
  })
  // END__######################################################################################################
}
