module.exports = function (router, content) {
  // START__####################################################################################################
  // File: fatal-application
  // Variable: direct-applicant

  router.post('/concepts/divert-duplicate-apps/fatal-application', function (req, res) {
      res.redirect('/concepts/end')
  })

  // Pass the question in to the page
  router.get('/concepts/divert-duplicate-apps/fatal-application/', function (req, res) {
    res.render('concepts/divert-duplicate-apps/fatal-application/index', content)
  })
  // END__######################################################################################################
}
