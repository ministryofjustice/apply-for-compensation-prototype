module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-start-screens/new-application/credentials-created', function (req, res) {
      res.redirect('/application/_1-qualifying/fatal-application')
  })

  router.get('/application/_0-start-screens/new-application/credentials-created/', function (req, res) {
    res.render('application/_0-start-screens/new-application/credentials-created/index', content)
  })

  // END__######################################################################################################
}
