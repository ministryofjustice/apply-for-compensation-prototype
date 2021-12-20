module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-to-apply-minor
  // Variable: direct-applicant

  router.post('/application/_3-3rd-party-reps/_2-minors/_2-your-details/authority-to-apply-minor', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-your-details/do-you-share-responsibility')
  })


  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/authority-to-apply-minor/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/authority-to-apply-minor/index', content)
  })

  // END__######################################################################################################
}
