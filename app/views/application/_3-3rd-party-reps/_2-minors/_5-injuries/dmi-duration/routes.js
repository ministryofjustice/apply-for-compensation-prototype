module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi-duration', function (req, res) {
  res.redirect('/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-context')
})

// Pass the question in to the page
router.get('/application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi-duration/', function (req, res) {
  res.render('application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi-duration/index', content)
})

router.get('/application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('application/_3-3rd-party-reps/_2-minors/_5-injuries/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
