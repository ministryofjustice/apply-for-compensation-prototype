module.exports = function (router, content) {
  // START__####################################################################################################
  // File: physical-injuries
  // Variable: incidentReported
  router.post('/application/health-consequences', function (req, res) {
    // Get the answer from the query string

  var healthConsequences = req.session.data['healthConsequences']

  if (healthConsequences === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/application/other-consequences')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/OCJ-result')
  }
  })

  // Pass the question in to the page
  router.get('/application/health-consequences/', function (req, res) {
    res.render('application/health-consequences/index', content)
  })
  // END__######################################################################################################
}
