module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: otherIncidentDetailsQ

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question', function (req, res) {
    // Get the answer from the query string
    var otherIncidentDetailsQ = req.session.data['otherIncidentDetailsQ']

    if (otherIncidentDetailsQ === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_05-offender-minors/context-contact-with-offender')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question/transition', content)
  })
  // END__######################################################################################################
}
