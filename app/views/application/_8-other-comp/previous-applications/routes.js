module.exports = function (router, content) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/application/_8-other-comp/previous-applications', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_10-end/check-your-answers-page')
      }
      res.redirect('/application/_8-other-comp/other-compensation')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_8-other-comp/previous-applications/', function (req, res) {
    res.render('application/_8-other-comp/previous-applications/index', content)
  })

  // Pass the error content in to the page
  router.get('/application/_8-other-comp/previous-applications/error', function (req, res) {
    res.render('application/_8-other-comp/previous-applications/error', content)
  })
  // END__######################################################################################################
}
