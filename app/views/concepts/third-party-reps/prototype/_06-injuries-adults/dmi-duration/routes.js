module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration', function (req, res) {

    // set section status to completed
    req.session.data['your_injuries_status'] = 'completed'

    res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-context')

})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration/index', content)
})

router.get('/concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-adults/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
