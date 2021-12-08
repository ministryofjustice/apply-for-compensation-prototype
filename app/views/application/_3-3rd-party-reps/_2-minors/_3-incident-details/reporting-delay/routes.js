module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-delay
  // we see that screen if the indicent date (or when the incident stopped for POA) is over 2 years from the date of application
  //logic for it is for incident-date and period-of-abuse-end

  router.post('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_3-3rd-party-reps/_2-minors/_10-end/check-your-answers-page')
    }
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/police-force')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/error-checkboxes', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when no text is entered in explanation field
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/error-explain', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/reporting-delay/error-explain', content)
  })
  // END__######################################################################################################
}
