module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/dont-know-credentials', function (req, res) {
      res.redirect('/application/_0-save-and-return-screens/start-screen')
  })

  router.get('/application/_0-save-and-return-screens/dont-know-credentials/', function (req, res) {
    res.render('application/_0-save-and-return-screens/dont-know-credentials/index', content)
  })

  // END__######################################################################################################
}
