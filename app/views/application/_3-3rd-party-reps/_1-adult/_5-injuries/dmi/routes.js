module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    // Get the answer from the query string
    var haveDMI = req.session.data['dmiDoYouHave']

    if (haveDMI === 'Yes') {

      // set section status to completed
      req.session.data['your_injuries_status'] = 'in progress'

      // Redirect to the relevant page
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi-duration')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_3-3rd-party-reps/_1-adult/_5-injuries/check-your-answers-page')
      }

      // set section status to completed
      req.session.data['your_injuries_status'] = 'completed'

      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-context')
    }

  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})

// Pass the question in to the page
router.get('/application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi/', function (req, res) {
  res.render('application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi/index', content)
})

router.get('/application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi/mental-health-error', function (req, res) {
  res.render('application/_3-3rd-party-reps/_1-adult/_5-injuries/dmi/mental-health-error', content)
})

// END__######################################################################################################
}
