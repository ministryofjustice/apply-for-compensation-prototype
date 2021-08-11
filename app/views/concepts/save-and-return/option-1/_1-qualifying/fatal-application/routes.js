module.exports = function (router, content) {
  // START__####################################################################################################
  // File: fatal-application
  // Variable: direct-applicant

  router.post('/concepts/save-and-return/option-1/_1-qualifying/fatal-application', function (req, res) {
    // Get the answer from the query string
    var fatalApplication = req.session.data['fatalApplication']

    if (fatalApplication === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/save-and-return/option-1/_1-qualifying/incident-reported')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-1/_1-qualifying/fatal-application/', function (req, res) {
    res.render('concepts/save-and-return/option-1/_1-qualifying/fatal-application/index', content)
  })
  // Error state
  router.get('/concepts/save-and-return/option-1/_1-qualifying/fatal-application/error', function (req, res) {
    res.render('concepts/save-and-return/option-1/_1-qualifying/fatal-application/error', content)
  })
  // END__######################################################################################################
}
