module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/who-is-making-the-application', function (req, res) {

      var directApplicant = req.session.data['direct-applicant']

      if (directApplicant === 'Myself') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/confirmation-options')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/rep-type')
      }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/who-is-making-the-application/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/who-is-making-the-application/index', content)
  })
  // END__######################################################################################################
}
