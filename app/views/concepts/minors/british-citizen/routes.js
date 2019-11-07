module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/minors/british-citizen', function (req, res) {
  // Get the answer from the query string
  var minorBritishCitizen = req.session.data['minorBritishCitizen']

  if (minorBritishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/minors/transition')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/minors/impact-on-you')
  }
})

// Pass the question in to the page
router.get('/concepts/minors/british-citizen/', function (req, res) {
  res.render('concepts/minors/british-citizen/index', content)
})

router.get('/concepts/minors/british-citizen/british-citizen-error', function (req, res) {
  res.render('concepts/minors/british-citizen/british-citizen-error', content)
})

// END__######################################################################################################
}
