module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/inner-west-and-central', function (req, res) {



    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/do-you-know-offender')

})

// Pass the question in to the page
router.get('/application/inner-west-and-central/', function (req, res) {
  res.render('application/inner-west-and-central/index', content)
})


// END__######################################################################################################
}
