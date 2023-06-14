module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-pre/option-3/link-email', function (req, res) {
      res.redirect('/concepts/save-and-return-pre/option-3/application-progress/')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-3/link-email/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-3/link-email/index', content)
  })

  // END__######################################################################################################
}
