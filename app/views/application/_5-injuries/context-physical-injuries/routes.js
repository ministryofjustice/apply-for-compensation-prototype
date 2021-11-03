module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_5-injuries/context-physical-injuries', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['your_injuries_status'] = 'in progress'


      res.redirect('/application/_5-injuries/have-physical-injuries')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_5-injuries/context-physical-injuries/', function (req, res) {
    res.render('application/_5-injuries/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
