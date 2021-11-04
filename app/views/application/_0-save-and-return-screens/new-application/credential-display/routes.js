module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/new-application/credential-display', function (req, res) {


    var optIn = req.session.data['optIn'];

    if (optIn === 'Continue') {
      res.redirect('/application/_0-save-and-return-screens/new-application/create-password')
    } else if ( optIn === "I don't want to save my progress" ) {
      res.redirect('/application/_3-incident-details/context-incident-details')
    }
  })

  router.get('/application/_0-save-and-return-screens/new-application/credential-display/', function (req, res) {
    res.render('application/_0-save-and-return-screens/new-application/credential-display/index', content)
  })

  // END__######################################################################################################
}
