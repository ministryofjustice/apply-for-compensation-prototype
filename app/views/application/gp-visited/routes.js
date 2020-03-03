module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/gp-visited', function (req, res) {
  // Get the answer from the query string
  var mentalHealth = req.session.data['visitedGP']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/gp-details')
})

// Pass the question in to the page
router.get('/application/gp-visited/', function (req, res) {
  res.render('application/gp-visited/index', content)
})


// END__######################################################################################################
}
