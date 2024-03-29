module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/application/_0-start-and-qualifying/who-is-making-the-application', function (req, res) {

      var directApplicant = req.session.data['direct-applicant']

      if (directApplicant === 'Myself') {
        // Redirect to the relevant page
        res.redirect('/application/_0-start-and-qualifying/over-18-you')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_0-start-and-qualifying/over-18-they')
      }

  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/who-is-making-the-application/', function (req, res) {
    res.render('application/_0-start-and-qualifying/who-is-making-the-application/index', content)
  })
  // Error state
  router.get('/application/_0-start-and-qualifying/who-is-making-the-application/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/who-is-making-the-application/error', content)
  })
  // END__######################################################################################################
}
