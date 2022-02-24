module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']


    if (directApplicant === 'Myself') {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/confirmation-options')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/name')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/index', content)
  })
  // END__######################################################################################################
}
