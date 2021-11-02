module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_3-incident-details/police-force', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      res.redirect('/application/_3-incident-details/crime-reference')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/police-force/', function (req, res) {
    res.render('application/_3-incident-details/police-force/index', content)
  })


  // END__######################################################################################################
}
