module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v4/finished-treatment', function (req, res) {
  // Get the answer from the query string

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/physical-injuries/one-q-page-v4/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/context-your-money')

})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/finished-treatment/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/finished-treatment/index', content)
})


// END__######################################################################################################
}