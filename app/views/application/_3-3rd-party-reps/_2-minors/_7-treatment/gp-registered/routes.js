module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-registered', function (req, res) {
  // Get the answer from the query string
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-visited')
  })

// Pass the question in to the page
router.get('/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-registered/', function (req, res) {
  res.render('application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-registered/index', content)
})

// END__######################################################################################################
}
