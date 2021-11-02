module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_5-injuries/context-about-dmi', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      res.redirect('/application/_5-injuries/dmi')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_5-injuries/context-about-dmi/', function (req, res) {
    res.render('application/_5-injuries/context-about-dmi/index', content)
  })
  // END__######################################################################################################
}
