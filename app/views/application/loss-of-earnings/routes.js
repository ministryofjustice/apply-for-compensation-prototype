module.exports = function (router, content) {
  // START__####################################################################################################
  // File: loss-of-earnings
  // Variable: incidentReported
  router.post('/application/loss-of-earnings', function (req, res) {
  // Get the answer from the query string
  var lOe = req.session.data['lOe']
   if (lOe === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/transition')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/special-expenses')
  }
})

  // Pass the question in to the page
  router.get('/application/loss-of-earnings/', function (req, res) {
    res.render('application/loss-of-earnings/index', content)
  })
  // END__######################################################################################################
}
