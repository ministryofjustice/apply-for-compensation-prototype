module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-to-apply-minor
  // Variable: direct-applicant

  router.post('/application/_0-start-and-qualifying/authority-to-apply-minor', function (req, res) {
    // Get the answer from the query string
    var legalGuardian = req.session.data['legalGuardian']

    if (legalGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_0-start-and-qualifying/authority-to-apply-minor/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-minors/_2-your-details/context-your-details')
    }
  })


  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/authority-to-apply-minor/', function (req, res) {
    res.render('application/_0-start-and-qualifying/authority-to-apply-minor/index', content)
  })

  // END__######################################################################################################
}
