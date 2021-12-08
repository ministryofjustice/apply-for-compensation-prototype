module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/applying-for-someone-else/minors/care-order', function (req, res) {
  // Get the answer from the query string
  var careOrder = req.session.data['care-order']

  if (careOrder === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/your-name')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_2-minors/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/care-order-details')
  }
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/care-order/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/care-order/index', content)
})

router.get('/concepts/applying-for-someone-else/minors/care-order/british-citizen-error', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/care-order/british-citizen-error', content)
})

// END__######################################################################################################
}
