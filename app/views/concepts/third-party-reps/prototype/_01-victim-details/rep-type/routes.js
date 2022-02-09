module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: rep-type

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/rep-type', function (req, res) {

      var directApplicant = req.session.data['direct-applicant']
      var repType = req.session.data['rep-type']

      if (directApplicant === 'Myself') {
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/confirmation-options')
      } else if (repType === 'Foster carer') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/foster-carer-context')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth')
      }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/rep-type/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/rep-type/index', content)
  })
  // END__######################################################################################################
}
