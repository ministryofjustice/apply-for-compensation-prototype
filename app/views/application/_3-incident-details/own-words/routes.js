module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/_3-incident-details/own-words', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // Get the answer from the query string
      var over18 = req.session.data['over18']

      if (over18 === 'No') {
        // Redirect to the relevant page
        res.redirect('/application/transition')
      } else {
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/_10-end/check-your-answers-page')
        }

        // set section status for task list
        req.session.data['about_the_crime_status'] = 'completed'

        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_4-offender/context-contact-with-offender')
      }

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/own-words/', function (req, res) {
    res.render('application/_3-incident-details/own-words/index', content)
  })
  //error page
  router.get('/application/_3-incident-details/own-words/error', function (req, res) {
    res.render('application/_3-incident-details/own-words/error', content)
  })
  //error page
  router.get('/application/_3-incident-details/own-words/transition', function (req, res) {
    res.render('application/_3-incident-details/own-words/transition', content)
  })
  // END__######################################################################################################
}
