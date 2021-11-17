module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_1-adult/_6-impact/loe-se-affected-daily-life', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      var stoppedWorking = req.session.data['stoppedWorking']

      if (stoppedWorking === "No") {

        // set section status to completed
        req.session.data['impact_status'] = 'completed'

        res.redirect('/application/_1-adult/_7-treatment/context-treatment')
      } else {
        res.redirect('/application/_1-adult/_6-impact/se-context')
      }

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_6-impact/loe-se-affected-daily-life/', function (req, res) {
    res.render('application/_1-adult/_6-impact/loe-se-affected-daily-life/index', content)
  })
  // END__######################################################################################################
}
