module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/application/_2-your-details/phone-number', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_9-end/check-your-answers-page')
    }
    res.redirect('/application/_3-incident-details/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/phone-number/', function (req, res) {
    res.render('application/_2-your-details/phone-number/index', content)
  })

  router.get('/application/_2-your-details/phone-number/error', function (req, res) {
    res.render('application/_2-your-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
