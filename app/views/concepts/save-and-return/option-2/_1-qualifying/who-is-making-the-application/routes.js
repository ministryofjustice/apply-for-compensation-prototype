module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application', function (req, res) {
    // Get the answer from the query string
    var directApplicant = req.session.data['direct-applicant']

    if (directApplicant === 'Myself') {
      // Redirect to the relevant page
      res.redirect('/concepts/save-and-return/option-2/_1-qualifying/over-18')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application/', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application/index', content)
  })
  // Error state
  router.get('/concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application/error', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application/error', content)
  })
  // END__######################################################################################################
}
