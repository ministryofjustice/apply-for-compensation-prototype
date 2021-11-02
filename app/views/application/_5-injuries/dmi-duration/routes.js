module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/application/_5-injuries/dmi-duration', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if (buttonClicked === 'Continue') {

    // set section status to completed
    req.session.data['your_injuries_status'] = 'completed'

    res.redirect('/application/_6-impact/loe-context')

  } else if (buttonClicked === 'Save and finish later') {
    return res.redirect('/application/_0-start-screens/save-confirmation')
  }
})

// Pass the question in to the page
router.get('/application/_5-injuries/dmi-duration/', function (req, res) {
  res.render('application/_5-injuries/dmi-duration/index', content)
})

router.get('/application/_5-injuries/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('application/_5-injuries/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
