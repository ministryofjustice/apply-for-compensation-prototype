module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/application/_2-applying-for-minors/_1-qualifying/parent-guardian', function (req, res) {
    // Get the answer from the query string
    var parentGuardian = req.session.data['parentGuardian']

    if (parentGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_2-applying-for-minors/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-applying-for-minors/_1-qualifying/authority-to-apply')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_1-qualifying/parent-guardian/', function (req, res) {
    res.render('application/_2-applying-for-minors/_1-qualifying/parent-guardian/index', content)
  })
  // Error state
  router.get('/application/_2-applying-for-minors/_1-qualifying/parent-guardian/error', function (req, res) {
    res.render('application/_2-applying-for-minors/_1-qualifying/parent-guardian/error', content)
  })
  // END__######################################################################################################
}
