module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/srr/phone-number', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/srr/preferred-days')
  })

  // Pass the question in to the page
  router.get('/srr/phone-number/', function (req, res) {
    res.render('srr/phone-number/index', content)
  })

  router.get('/srr/phone-number/error', function (req, res) {
    res.render('srr/phone-number/error', content)
  })
  // END__######################################################################################################
}
