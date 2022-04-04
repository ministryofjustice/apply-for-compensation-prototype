module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries', function (req, res) {
  res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/have-physical-injuries')
})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries/index', content)
})

// END__######################################################################################################
}
