module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-start-screens/new-application/credential-display', function (req, res) {


    var optIn = req.session.data['optIn'];

    if (optIn === 'Continue') {
      res.redirect('/application/_0-start-screens/new-application/create-password')
    } else if ( optIn === "I don't want to save my progress" ) {
      res.redirect('/application/_1-qualifying/fatal-application')
    }
  })

  router.get('/application/_0-start-screens/new-application/credential-display/', function (req, res) {
    res.render('application/_0-start-screens/new-application/credential-display/index', content)
  })

  // END__######################################################################################################
}
