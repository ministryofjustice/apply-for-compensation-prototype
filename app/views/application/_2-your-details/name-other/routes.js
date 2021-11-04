module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_2-your-details/name-other', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      res.redirect('/application/_2-your-details/date-of-birth')

      } else if (buttonClicked === 'Save and finish later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }

  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/name-other/', function (req, res) {
    res.render('application/_2-your-details/name-other/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_2-your-details/name-other/error', function (req, res) {
    res.render('application/_2-your-details/name-other/error', content)
  })
  // END__######################################################################################################
}
