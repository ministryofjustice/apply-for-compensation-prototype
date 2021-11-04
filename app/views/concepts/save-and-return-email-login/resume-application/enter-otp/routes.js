module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-email-login/resume-application/enter-otp', function (req, res) {
      res.redirect('/concepts/save-and-return-email-login/resume-application/success')
  })

  router.get('/concepts/save-and-return-email-login/resume-application/enter-otp/', function (req, res) {
    res.render('concepts/save-and-return-email-login/resume-application/enter-otp/index', content)
  })

  // END__######################################################################################################
}
