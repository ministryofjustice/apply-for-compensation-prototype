module.exports = function (router, content) {
  // START__####################################################################################################
  // File: application-delay
  // we see that screen if the indicent date (or when the incident stopped for POA) is over 2 years from the date of application
  //logic for it is for incident-date and period-of-abuse-end

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay', function (req, res) {
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
        }
        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/error-checkboxes', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when no text is entered in explanation field
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/error-explain', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/application-delay/error-explain', content)
  })
  // END__######################################################################################################
}
