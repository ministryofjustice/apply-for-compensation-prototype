module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/28-weeks', function (req, res) {
  // Get the answer from the query string

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/physical-injuries')
  
})

// Pass the question in to the page
router.get('/application/28-weeks/', function (req, res) {
  res.render('application/28-weeks/index', content)
})

// END__######################################################################################################
}
