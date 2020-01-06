module.exports = function (router, content) {
// START__####################################################################################################
// File: have-email-address
// Variable: haveEmail

router.post('/concepts/confirmation-choice/have-email-address', function (req, res) {
  // Get the answer from the query string
  var haveEmail = req.session.data['haveEmail']

  if (haveEmail === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/confirmation-choice/mobile-number')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/confirmation-choice/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/confirmation-choice/email-address')
  }
})

// Pass the question in to the page
router.get('/concepts/confirmation-choice/have-email-address/', function (req, res) {
  res.render('concepts/confirmation-choice/have-email-address/index', content)
})

router.get('/concepts/confirmation-choice/have-email-address/have-email-address-error', function (req, res) {
  res.render('concepts/confirmation-choice/have-email-address/have-email-address-error', content)
})

// END__######################################################################################################
}
