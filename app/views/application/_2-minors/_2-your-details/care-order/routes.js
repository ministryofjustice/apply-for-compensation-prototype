module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/_2-minors/_2-your-details/care-order', function (req, res) {
  // Get the answer from the query string
  var careOrder = req.session.data['care-order']

  if (careOrder === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_2-minors/_2-victim-details/context-victim-details')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_2-minors/_2-your-details/application/v1/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_2-minors/_2-your-details/care-order-details')
  }
})

// Pass the question in to the page
router.get('/application/_2-minors/_2-your-details/care-order/', function (req, res) {
  res.render('application/_2-minors/_2-your-details/care-order/index', content)
})


// END__######################################################################################################
}
