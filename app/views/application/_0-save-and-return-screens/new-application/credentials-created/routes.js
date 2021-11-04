module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/new-application/credentials-created', function (req, res) {
    res.redirect('/application/_3-incident-details/context-incident-details')
  })

  router.get('/application/_0-save-and-return-screens/new-application/credentials-created/', function (req, res) {
    res.render('application/_0-save-and-return-screens/new-application/credentials-created/index', content)
  })

  // END__######################################################################################################
}
