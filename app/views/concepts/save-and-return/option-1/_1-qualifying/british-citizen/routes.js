module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/save-and-return/option-1/_1-qualifying/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/transition')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/save-and-return/option-1/_10-end/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/save-and-return/option-1/_2-your-details/context-your-details')
  }
})

// Pass the question in to the page
router.get('/concepts/save-and-return/option-1/_1-qualifying/british-citizen/', function (req, res) {
  res.render('concepts/save-and-return/option-1/_1-qualifying/british-citizen/index', content)
})

router.get('/concepts/save-and-return/option-1/_1-qualifying/british-citizen/british-citizen-error', function (req, res) {
  res.render('concepts/save-and-return/option-1/_1-qualifying/british-citizen/british-citizen-error', content)
})

router.get('/concepts/save-and-return/option-1/_1-qualifying/british-citizen/transition', function (req, res) {
  res.render('concepts/save-and-return/option-1/_1-qualifying/british-citizen/transition', content)
})

// END__######################################################################################################
}
