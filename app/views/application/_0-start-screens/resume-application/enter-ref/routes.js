module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-start-screens/resume-application/enter-ref', function (req, res) {
      res.redirect('/application/_0-start-screens/resume-application/enter-password')
  })

  router.get('/application/_0-start-screens/resume-application/enter-ref/', function (req, res) {
    res.render('application/_0-start-screens/resume-application/enter-ref/index', content)
  })

  // END__######################################################################################################
}
