module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/application/_2-your-details/phone-number', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

        // set section status for task list
        req.session.data['your_details_status'] = 'completed'

        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/_10-end/check-your-answers-page')
        }
        res.redirect('/application/_0-save-and-return-screens/new-application/credential-display')

      } else if (buttonClicked === 'Save and finish later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/phone-number/', function (req, res) {
    res.render('application/_2-your-details/phone-number/index', content)
  })

  router.get('/application/_2-your-details/phone-number/error', function (req, res) {
    res.render('application/_2-your-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
