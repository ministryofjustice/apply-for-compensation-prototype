module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthMoreInfo

router.post('/application/_5-injuries/how-it-affected-you', function (req, res) {
  // Get the answer from the query string
  var mentalHealthMoreInfo = req.session.data['mentalHealthMoreInfoMoreInfo']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_5-injuries/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_6-treatment/context-treatment')
})

// Pass the question in to the page
router.get('/application/_5-injuries/how-it-affected-you/', function (req, res) {
  res.render('application/_5-injuries/how-it-affected-you/index', content)
})


// END__######################################################################################################
}
