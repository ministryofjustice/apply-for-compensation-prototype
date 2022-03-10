module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/under18', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/are-you-their-parent')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/under18/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/under18/index', content)
  })
  // END__######################################################################################################
}
