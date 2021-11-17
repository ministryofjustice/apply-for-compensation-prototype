module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-to-apply
  // Variable: direct-applicant

  router.post('/application/_2-applying-for-minors/_1-qualifying/authority-to-apply', function (req, res) {
    // Get the answer from the query string
    var legalGuardian = req.session.data['legalGuardian']

    if (legalGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_2-applying-for-minors/_1-qualifying/authority-to-apply/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-applying-for-minors/_2-your-details/context-your-details')
    }
  })


  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_1-qualifying/authority-to-apply/', function (req, res) {
    res.render('application/_2-applying-for-minors/_1-qualifying/authority-to-apply/index', content)
  })

  // END__######################################################################################################
}
