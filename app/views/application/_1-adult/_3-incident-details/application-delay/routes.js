module.exports = function (router, content) {
  // START__####################################################################################################
  // File: application-delay
  // we see that screen if the indicent date (or when the incident stopped for POA) is over 2 years from the date of application
  //logic for it is for incident-date and period-of-abuse-end

  router.post('/application/_1-adult/_3-incident-details/application-delay', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/_1-adult/_10-end/check-your-answers-page')
        }
        res.redirect('/application/_1-adult/_3-incident-details/incident-location')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_3-incident-details/application-delay/', function (req, res) {
    res.render('application/_1-adult/_3-incident-details/application-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/application/_1-adult/_3-incident-details/application-delay/error-checkboxes', function (req, res) {
    res.render('application/_1-adult/_3-incident-details/application-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when no text is entered in explanation field
  router.get('/application/_1-adult/_3-incident-details/application-delay/error-explain', function (req, res) {
    res.render('application/_1-adult/_3-incident-details/application-delay/error-explain', content)
  })
  // END__######################################################################################################
}
