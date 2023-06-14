module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/application/_3-3rd-party-reps/_1-adult/_2-your-details/address', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

          res.redirect('/application/_3-3rd-party-reps/_1-adult/_2-your-details/phone-number')
        } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  router.post('/application/_3-3rd-party-reps/_1-adult/_2-your-details/address', function (req, res) {

    var emailConfirmation = req.session.data['minor-direct-applicant']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/check-your-answers-page')
    }
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_2-your-details/phone-number')
  })
  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/address/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/address/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/address/error-building-street-blank', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/address/error-building-street-blank', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/address/error-town-city-blank', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/address/error-town-city-blank', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/address/error-postcode', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/address/error-postcode', content)
  })
  // END__######################################################################################################
}
