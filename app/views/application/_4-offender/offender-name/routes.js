module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/application/_4-offender/offender-name', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      res.redirect('/application/_4-offender/contact-with-offender')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/offender-name/', function (req, res) {
    res.render('application/_4-offender/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/_4-offender/offender-name/error', function (req, res) {
    res.render('application/_4-offender/offender-name/error', content)
  })
  // END__######################################################################################################
}
