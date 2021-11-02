module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-start-screens/resume-application/enter-password', function (req, res) {

    // what the user inputs their reference as
    var userInputRef = req.session.data['save-and-return-ref']
    // what our prototype knows their reference to be (what we generated)
    var correctCredential = req.session.data['userCredential']
    // what the user inputs their password as
    var userInputPassword = req.session.data['password-input']
    // what our prototype knows their password to be (what they created)
    var correctPassword = req.session.data['user-password']

    console.log('User input ref: ' + userInputRef)
    console.log('Correct ref: ' + correctCredential)
    console.log('User input password: ' + userInputPassword)
    console.log('Correct password: ' + correctPassword)

    if ( (userInputRef === correctCredential) && (userInputPassword === correctPassword) ) {
      res.redirect('/application/_0-start-screens/resume-application/success')
    } else {
      res.redirect('/application/_0-start-screens/resume-application/credentials-error')
    }
  })

  router.get('/application/_0-start-screens/resume-application/enter-password/', function (req, res) {
    res.render('application/_0-start-screens/resume-application/enter-password/index', content)
  })

  // END__######################################################################################################
}
