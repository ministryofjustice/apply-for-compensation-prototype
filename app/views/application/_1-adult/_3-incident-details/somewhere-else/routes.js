module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_1-adult/_3-incident-details/somewhere-else', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_1-adult/_10-end/check-your-answers-page')
      }

    res.redirect('/application/_1-adult/_3-incident-details/do-you-know-offender-name')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_3-incident-details/somewhere-else/', function (req, res) {
    res.render('application/_1-adult/_3-incident-details/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
