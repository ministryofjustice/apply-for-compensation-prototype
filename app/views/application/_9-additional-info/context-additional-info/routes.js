module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_9-additional-info/context-additional-info', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['additional_info_status'] = 'in progress'

      res.redirect('/application/_9-additional-info/additional-info-question')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_9-additional-info/context-additional-info/', function (req, res) {
    res.render('application/_9-additional-info/context-additional-info/index', content)
  })
  // END__######################################################################################################
}
