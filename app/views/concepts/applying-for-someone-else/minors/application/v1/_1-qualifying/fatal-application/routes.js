module.exports = function (router, content) {
  // START__####################################################################################################
  // File: fatal-application
  // Variable: direct-applicant

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/fatal-application', function (req, res) {
    // Get the answer from the query string
    var fatalApplication = req.session.data['fatalApplication']

    if (fatalApplication === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/incident-reported')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/transition')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/fatal-concepts/applying-for-someone-else/minors/application/v1/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/fatal-concepts/applying-for-someone-else/minors/application/v1/index', content)
  })
  // Error state
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/fatal-concepts/applying-for-someone-else/minors/application/v1/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/fatal-concepts/applying-for-someone-else/minors/application/v1/error', content)
  })
  // END__######################################################################################################
}
