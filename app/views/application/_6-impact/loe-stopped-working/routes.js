module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/application/_6-impact/loe-stopped-working', function (req, res) {


    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // Get the answer from the query string
      var stoppedWorking = req.session.data['stoppedWorking']

      if (stoppedWorking === 'No') {

        // Redirect to the relevant page
        res.redirect('/application/_6-impact/loe-se-affected-daily-life')
      } else {

        // set section status to completed
        req.session.data['impact_status'] = 'in progress'
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_6-impact/loe-stopped-working-how-long')
      }

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/loe-stopped-working/', function (req, res) {
    res.render('application/_6-impact/loe-stopped-working/index', content)
  })
  // END__######################################################################################################
}
