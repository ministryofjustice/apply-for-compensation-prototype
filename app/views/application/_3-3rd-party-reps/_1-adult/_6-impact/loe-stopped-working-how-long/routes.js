module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-stopped-working-how-long', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      res.redirect('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-se-affected-daily-life')

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-stopped-working-how-long/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_6-impact/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
