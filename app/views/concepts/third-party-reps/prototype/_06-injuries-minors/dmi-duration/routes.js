module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/dmi-duration', function (req, res) {
  res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/loe-context')
})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_06-injuries-minors/dmi-duration/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-minors/dmi-duration/index', content)
})

router.get('/concepts/third-party-reps/prototype/_06-injuries-minors/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-minors/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
