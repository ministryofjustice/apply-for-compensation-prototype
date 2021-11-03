module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: otherDetailsQ

  router.post('/application/_9-additional-info/additional-info-question', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // Get the answer from the query string
      var applicationAdditionalInfoQ = req.session.data['applicationAdditionalInfoQ']

      if (applicationAdditionalInfoQ === 'Yes') {

        // set section status to completed
        req.session.data['additional_info_status'] = 'in progress'

        // Redirect to the relevant page
        res.redirect('/application/_9-additional-info/additional-info-details')
      } else {
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/_10-end/check-your-answers-page')
        }

        // set section status to completed
        req.session.data['additional_info_status'] = 'completed'

        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_10-end/check-your-answers-page')
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_9-additional-info/additional-info-question/', function (req, res) {
    res.render('application/_9-additional-info/additional-info-question/index', content)
  })
  //error page
  router.get('/application/_9-additional-info/additional-info-question/error', function (req, res) {
    res.render('application/_9-additional-info/additional-info-question/error', content)
  })
  //error page
  router.get('/application/_9-additional-info/additional-info-question/transition', function (req, res) {
    res.render('application/_9-additional-info/additional-info-question/transition', content)
  })
  // END__######################################################################################################
}
