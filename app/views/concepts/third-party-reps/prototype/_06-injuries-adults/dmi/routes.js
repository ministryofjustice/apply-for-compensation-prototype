module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi', function (req, res) {

    // Get the answer from the query string
    var haveDMI = req.session.data['dmiDoYouHave']

    if (haveDMI === 'Yes') {

      // set section status to completed
      req.session.data['your_injuries_status'] = 'in progress'

      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/check-your-answers-page')
      }

      // set section status to completed
      req.session.data['your_injuries_status'] = 'completed'

      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-context')
    }

})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-adults/dmi/index', content)
})

router.get('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi/mental-health-error', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-adults/dmi/mental-health-error', content)
})

// END__######################################################################################################
}
