module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-email-login/resume-application/success', function (req, res) {
      res.redirect('/concepts/save-and-return-email-login/resume-application/success')
  })

  router.get('/concepts/save-and-return-email-login/resume-application/success/', function (req, res) {
    res.render('concepts/save-and-return-email-login/resume-application/success/index', content)
  })

  // END__######################################################################################################
}
