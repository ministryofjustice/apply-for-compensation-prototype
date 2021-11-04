module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/resume-application-attempt-1/enter-dob', function (req, res) {

    // what the user inputs their reference as
    var userInputRef = req.session.data['save-and-return-ref']
    // what our prototype knows their reference to be (what we generated)
    var correctCredential = req.session.data['userCredential']
    // what the user inputs their password as
    var userInputPassword = req.session.data['password-input']
    // what our prototype knows their password to be (what they created)
    var correctPassword = req.session.data['user-password']

    // what the user said their date of birth was
    var correctDobDay = req.session.data['dob-day']
    var correctDobMonth = req.session.data['dob-month']
    var correctDobYear = req.session.data['dob-year']

    // what they put in when resuming their application
    var userInputDobDay = req.session.data['dob-input-day']
    var userInputDobMonth = req.session.data['dob-input-month']
    var userInputDobYear = req.session.data['dob-input-year']

    console.log('User input ref: ' + userInputRef)
    console.log('Correct ref: ' + correctCredential)
    console.log('User input password: ' + userInputPassword)
    console.log('Correct password: ' + correctPassword)
    console.log('Correct dob day: ' + correctDobDay)
    console.log('Correct dob month: ' + correctDobMonth)
    console.log('Correct dob year: ' + correctDobYear)
    console.log('User input dob day: ' + userInputDobDay)
    console.log('User input dob month: ' + userInputDobMonth)
    console.log('User input dob year: ' + userInputDobYear)

    if ( (userInputRef === correctCredential)
          && (userInputPassword === correctPassword)
          && (correctDobDay === userInputDobDay)
          && (correctDobMonth === userInputDobMonth)
          && (correctDobYear === userInputDobYear)
        ) {
      res.redirect('/application/_0-save-and-return-screens/success')
    } else {
      res.redirect('/application/_0-save-and-return-screens/resume-application-attempt-1/credentials-error')
  }
})

  router.get('/application/_0-save-and-return-screens/resume-application-attempt-1/enter-dob/', function (req, res) {
    res.render('application/_0-save-and-return-screens/resume-application-attempt-1/enter-dob/index', content)
  })

  // END__######################################################################################################
}
