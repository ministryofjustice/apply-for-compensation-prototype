module.exports = function (router, content) {
  // START__####################################################################################################
  // File: fatal-application
  // Variable: direct-applicant

  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/fatal-application', function (req, res) {
    // Get the answer from the query string
    var fatalApplication = req.session.data['fatalApplication']

      if (fatalApplication === 'No') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/transition')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/fatal-concepts/third-party-reps/prototype/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/fatal-concepts/third-party-reps/prototype/index', content)
  })

  // END__######################################################################################################
}
