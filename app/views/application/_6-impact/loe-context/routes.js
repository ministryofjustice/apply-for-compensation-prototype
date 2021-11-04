module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/loe-context', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['impact_status'] = 'in progress'

      res.redirect('/application/_6-impact/loe-working')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/loe-context/', function (req, res) {
    res.render('application/_6-impact/loe-context/index', content)
  })
  // END__######################################################################################################
}
