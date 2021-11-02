module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-start-screens/resume-application/credentials-error', function (req, res) {
      res.redirect('/application/_0-start-screens/resume-application/enter-ref')
  })

  router.get('/application/_0-start-screens/resume-application/credentials-error/', function (req, res) {
    res.render('application/_0-start-screens/resume-application/credentials-error/index', content)
  })

  // END__######################################################################################################
}
