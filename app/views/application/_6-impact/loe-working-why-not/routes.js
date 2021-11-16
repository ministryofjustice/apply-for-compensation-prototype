module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/loe-working-why-not', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      res.redirect('/application/_6-impact/loe-stopped-working')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/loe-working-why-not/', function (req, res) {
    res.render('application/_6-impact/loe-working-why-not/index', content)
  })
  // END__######################################################################################################
}
