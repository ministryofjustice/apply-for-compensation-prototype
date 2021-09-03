module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: otherIncidentDetailsQ

  router.post('/application/_3-incident-details/own-words-question', function (req, res) {
    // Get the answer from the query string
    var otherIncidentDetailsQ = req.session.data['otherIncidentDetailsQ']

    if (otherIncidentDetailsQ === 'Yes') {

      // set section status for task list
      req.session.data['about_the_crime_status'] = 'in progress'

      // Redirect to the relevant page
      res.redirect('/application/_3-incident-details/own-words')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_10-end/check-your-answers-page')
      }

      // set section status for task list
      req.session.data['about_the_crime_status'] = 'completed'

      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_4-offender/context-contact-with-offender')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/own-words-question/', function (req, res) {
    res.render('application/_3-incident-details/own-words-question/index', content)
  })
  //error page
  router.get('/application/_3-incident-details/own-words-question/error', function (req, res) {
    res.render('application/_3-incident-details/own-words-question/error', content)
  })
  //error page
  router.get('/application/_3-incident-details/own-words-question/transition', function (req, res) {
    res.render('application/_3-incident-details/own-words-question/transition', content)
  })
  // END__######################################################################################################
}
