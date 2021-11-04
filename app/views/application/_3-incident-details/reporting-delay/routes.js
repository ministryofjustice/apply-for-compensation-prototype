module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-delay
  //
  router.post('/application/_3-incident-details/reporting-delay', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      res.redirect('/application/_3-incident-details/police-force')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/reporting-delay/', function (req, res) {
    res.render('application/_3-incident-details/reporting-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/application/_3-incident-details/reporting-delay/error-checkboxes', function (req, res) {
    res.render('application/_3-incident-details/reporting-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when text field is left empty
  router.get('/application/_3-incident-details/reporting-delay/error-explain', function (req, res) {
    res.render('application/_3-incident-details/reporting-delay/error-explain', content)
  })
  // END__######################################################################################################
}
