module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/resume-application-attempt-1/enter-credentials', function (req, res) {
      res.redirect('/application/_0-save-and-return-screens/resume-application-attempt-1/enter-dob')
  })

  router.get('/application/_0-save-and-return-screens/resume-application-attempt-1/enter-credentials/', function (req, res) {
    res.render('application/_0-save-and-return-screens/resume-application-attempt-1/enter-credentials/index', content)
  })

  // END__######################################################################################################
}
