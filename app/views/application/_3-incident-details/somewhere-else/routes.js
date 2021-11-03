module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_3-incident-details/somewhere-else', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_10-end/check-your-answers-page')
      }

    res.redirect('/application/_3-incident-details/do-you-know-offender-name')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/somewhere-else/', function (req, res) {
    res.render('application/_3-incident-details/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
