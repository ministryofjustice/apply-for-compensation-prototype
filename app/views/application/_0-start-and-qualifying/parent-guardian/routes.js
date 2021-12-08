module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/application/_0-start-and-qualifying/parent-guardian', function (req, res) {
    // Get the answer from the query string
    var parentGuardian = req.session.data['parentGuardian']

    if (parentGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/context-rep-details')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_0-start-and-qualifying/authority-to-apply-minor')
    }
  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/parent-guardian/', function (req, res) {
    res.render('application/_0-start-and-qualifying/parent-guardian/index', content)
  })
  // Error state
  router.get('/application/_0-start-and-qualifying/parent-guardian/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/parent-guardian/error', content)
  })
  // END__######################################################################################################
}
