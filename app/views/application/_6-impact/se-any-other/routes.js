module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/se-any-other', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['impact_status'] = 'completed'

      res.redirect('/application/_7-treatment/context-treatment')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/se-any-other/', function (req, res) {
    res.render('application/_6-impact/se-any-other/index', content)
  })
  // END__######################################################################################################
}
