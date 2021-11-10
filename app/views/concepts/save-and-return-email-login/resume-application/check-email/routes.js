module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-email-login/resume-application/check-email', function (req, res) {
      res.redirect('/concepts/save-and-return-email-login/resume-application/enter-otp')
  })

  router.get('/concepts/save-and-return-email-login/resume-application/check-email/', function (req, res) {
    res.render('concepts/save-and-return-email-login/resume-application/check-email/index', content)
  })

  // END__######################################################################################################
}
