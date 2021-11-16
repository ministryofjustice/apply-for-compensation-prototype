module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/application/_10-end/declaration', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      var agreeToDeclaration = req.session.data['agreeToDeclaration']
      if (agreeToDeclaration == 'agree') {

        // set section status to completed
        req.session.data['declaration_status'] = 'completed'

        res.redirect('/application/_10-end/confirmation-page')
      } else {

        // set section status to completed
        req.session.data['declaration_status'] = 'in progress'

        res.redirect('/application/_10-end/declaration/error')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  router.post('/application/_10-end/declaration/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {

      // set section status to completed
      req.session.data['declaration_status'] = 'completed'

      res.redirect('/application/_10-end/confirmation-page')
    } else {

      // set section status to completed
      req.session.data['declaration_status'] = 'in progress'

      res.redirect('/application/_10-end/declaration/error')
    }
  })

  // Pass the question in to the page
  router.get('/application/_10-end/declaration/', function (req, res) {
    res.render('application/_10-end/declaration/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_10-end/declaration/error', function (req, res) {
    res.render('application/_10-end/declaration/error', content)
  })

  // END__######################################################################################################
}
