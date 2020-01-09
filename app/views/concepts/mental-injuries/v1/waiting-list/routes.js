module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDiagnosis

router.post('/concepts/mental-injuries/v1/waiting-list', function (req, res) {
  // Get the answer from the query string
  var mentalHealthWaitingList = req.session.data['mentalHealthWaitingList']

  if (mentalHealthWaitingList === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/mental-injuries/v1/gp-details')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/mental-injuries/v1/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/mental-injuries/v1/gp-details')
  }
})

// Pass the question in to the page
router.get('/concepts/mental-injuries/v1/waiting-list/', function (req, res) {
  res.render('concepts/mental-injuries/v1/waiting-list/index', content)
})

router.get('/concepts/mental-injuries/v1/waiting-list/waiting-list-error', function (req, res) {
  res.render('concepts/mental-injuries/v1/waiting-list/waiting-list-error', content)
})

// END__######################################################################################################
}