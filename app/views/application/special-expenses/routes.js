module.exports = function (router, content) {
  // START__####################################################################################################
  // File: physical-injuries
  // Variable: incidentReported
  router.post('/application/special-expenses', function (req, res) {
    // Get the answer from the query string
    var specExp = req.session.data['specExp']
     if (specExp === 'yes') {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/other-consequences')
    }
    })

  // Pass the question in to the page
  router.get('/application/physical-injuries/', function (req, res) {
    res.render('application/physical-injuries/index', content)
  })
  // END__######################################################################################################
}
