module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-email-login/new-application/verified-email', function (req, res) {
      res.redirect('/concepts/save-and-return-email-login/new-application/verified-email')
  })

  router.get('/concepts/save-and-return-email-login/new-application/verified-email/', function (req, res) {
    res.render('concepts/save-and-return-email-login/new-application/verified-email/index', content)
  })

  // END__######################################################################################################
}
