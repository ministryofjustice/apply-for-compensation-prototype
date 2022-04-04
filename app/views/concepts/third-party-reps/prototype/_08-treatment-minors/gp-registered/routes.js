module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-registered', function (req, res) {
  // Get the answer from the query string
    res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-visited')
  })

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-registered/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_08-treatment-minors/gp-registered/index', content)
})

// END__######################################################################################################
}
