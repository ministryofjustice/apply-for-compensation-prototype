module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/loe-stopped-working', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // Get the answer from the query string
      var stoppedWorking = req.session.data['stoppedWorking']

      if (stoppedWorking === 'No') {

        // set section status to completed
        req.session.data['impact_status'] = 'completed'

        // Redirect to the relevant page
        res.redirect('/application/_7-treatment/context-treatment')
      } else {

        // set section status to completed
        req.session.data['impact_status'] = 'in progress'

        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_6-impact/loe-stopped-working-how-long')
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/loe-stopped-working/', function (req, res) {
    res.render('application/_6-impact/loe-stopped-working/index', content)
  })
  // END__######################################################################################################
}
