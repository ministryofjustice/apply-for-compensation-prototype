module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi', function (req, res) {
  // Get the answer from the query string
  var haveDMI = req.session.data['dmiDoYouHave']

  if (haveDMI === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/how-it-affected-you')
  }
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi/index', content)
})

router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi/mental-health-error', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi/mental-health-error', content)
})

// END__######################################################################################################
}
