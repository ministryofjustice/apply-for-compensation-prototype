module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/application/no-mental-injury', function (req, res) {
  // Get the answer from the query string
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/single-or-multiple-incidents')
})

// Pass the question in to the page
router.get('/application/no-mental-injury/', function (req, res) {
  res.render('application/no-mental-injury/index', content)
})

router.get('/application/no-mental-injury/duration-error', function (req, res) {
  res.render('application/no-mental-injury/duration-error', content)
})

// END__######################################################################################################
}
