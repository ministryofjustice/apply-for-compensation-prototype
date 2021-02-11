module.exports = function (router, content) {
  // START__####################################################################################################
  // File: application-delay
  // we see that screen if the indicent date (or when the incident stopped for POA) is over 2 years from the date of application
  //logic for it is for incident-date and period-of-abuse-end

  router.post('/concepts/applying-for-someone-else/minors/application/v1/application-delay', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
    }
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/incident-location')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/application-delay/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/application-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/concepts/applying-for-someone-else/minors/application/v1/application-delay/error-checkboxes', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/application-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when no text is entered in explanation field
  router.get('/concepts/applying-for-someone-else/minors/application/v1/application-delay/error-explain', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/application-delay/error-explain', content)
  })
  // END__######################################################################################################
}
