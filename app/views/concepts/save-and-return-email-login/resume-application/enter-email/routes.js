module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-email-login/resume-application/enter-email', function (req, res) {
      res.redirect('/concepts/save-and-return-email-login/resume-application/enter-otp')
  })

  router.get('/concepts/save-and-return-email-login/resume-application/enter-email/', function (req, res) {
    res.render('concepts/save-and-return-email-login/resume-application/enter-email/index', content)
  })

  // END__######################################################################################################
}
