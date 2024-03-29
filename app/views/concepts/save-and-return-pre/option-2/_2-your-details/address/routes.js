module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/save-and-return-pre/option-2/_2-your-details/address', function (req, res) {
    // Get the answer from the query string
    var confirmationPreference = req.session.data['confirmationPreference']

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {
      if (confirmationPreference === 'Email') {
        // Redirect to the relevant page
        res.redirect('/concepts/save-and-return-pre/option-2/_2-your-details/phone-number')
      } else if (confirmationPreference === 'Text') {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/save-and-return-pre/option-2/_2-your-details/email-address')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/concepts/save-and-return-pre/option-2/confirmation')
    }

  })

  router.post('/concepts/save-and-return-pre/option-2/_2-your-details/address', function (req, res) {

    var emailConfirmation = req.session.data['minor-direct-applicant']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/save-and-return-pre/option-2/_10-end/check-your-answers-page')
    }
    res.redirect('/concepts/save-and-return-pre/option-2/_2-your-details/phone-number')
  })
  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/address/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/address/index', content)
  })

  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/address/error-building-street-blank', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/address/error-building-street-blank', content)
  })

  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/address/error-town-city-blank', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/address/error-town-city-blank', content)
  })

  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/address/error-postcode', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/address/error-postcode', content)
  })
  // END__######################################################################################################
}
