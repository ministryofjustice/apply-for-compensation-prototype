module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/new-application/create-password/error-pw-protocol', function (req, res) {

    var enterPassword = req.session.data['user-password']
    var retypePassword = req.session.data['user-password-retype']
    let passwordProtocol = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
    var optIn = req.session.data['optIn']

    if ( optIn === "I don't want to save my progress" ) {
      res.redirect('/application/_3-incident-details/context-incident-details')
    } else if ( ( passwordProtocol.test(enterPassword) === false ) && ( enterPassword !== retypePassword ) ) {
      res.redirect('/application/_0-save-and-return-screens/new-application/create-password/error-pw-both')
    } else if ( passwordProtocol.test(enterPassword) === false ) {
      res.redirect('/application/_0-save-and-return-screens/new-application/create-password/error-pw-protocol')
    } else if ( enterPassword !== retypePassword ) {
      res.redirect('/application/_0-save-and-return-screens/new-application/create-password/error-pw-mismatch')
    } else {
      res.redirect('/application/_0-save-and-return-screens/new-application/credentials-created')
    }
  })

  router.get('/application/_0-save-and-return-screens/new-application/create-password/error-pw-protocol/', function (req, res) {
    res.render('application/_0-save-and-return-screens/new-application/create-password/error-pw-protocol/index', content)
  })

  // END__######################################################################################################
}
