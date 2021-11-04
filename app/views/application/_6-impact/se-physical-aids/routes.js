module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/se-physical-aids', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      res.redirect('/application/_6-impact/se-any-other')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/se-physical-aids/', function (req, res) {
    res.render('application/_6-impact/se-physical-aids/index', content)
  })
  // END__######################################################################################################
}
