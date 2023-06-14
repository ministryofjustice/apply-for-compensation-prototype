module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/_0-start-and-qualifying/british-citizen-you', function (req, res) {

    // Get the answer from the query string
    var britishCitizen = req.session.data['britishCitizen']

    if (britishCitizen === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_0-start-and-qualifying/transition')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_1-adult/_10-end/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_1-adult/_2-your-details/context-your-details')
    }
})

// Pass the question in to the page
router.get('/application/_0-start-and-qualifying/british-citizen-you/', function (req, res) {
  res.render('application/_0-start-and-qualifying/british-citizen-you/index', content)
})

router.get('/application/_0-start-and-qualifying/british-citizen-you/british-citizen-error', function (req, res) {
  res.render('application/_0-start-and-qualifying/british-citizen-you/british-citizen-error', content)
})

router.get('/application/_0-start-and-qualifying/british-citizen-you/transition', function (req, res) {
  res.render('application/_0-start-and-qualifying/british-citizen-you/transition', content)
})

// END__######################################################################################################
}
