module.exports = function (router, content) {
  // START__####################################################################################################
  // File: fatal-application
  // Variable: direct-applicant

  router.post('/application/_1-qualifying/fatal-application', function (req, res) {
    // Get the answer from the query string
    var fatalApplication = req.session.data['fatalApplication']

    if (fatalApplication === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_1-qualifying/who-is-making-the-application')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/_1-qualifying/fatal-application/', function (req, res) {
    res.render('application/_1-qualifying/fatal-application/index', content)
  })
  // Error state
  router.get('/application/_1-qualifying/fatal-application/error', function (req, res) {
    res.render('application/_1-qualifying/fatal-application/error', content)
  })
  // END__######################################################################################################
}
