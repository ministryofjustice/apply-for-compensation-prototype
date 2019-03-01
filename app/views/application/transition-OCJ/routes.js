module.exports = function (router, content) {
  // START__####################################################################################################
  // File: transition

  router.post('/application/transition-OCJ', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('https://www.cica.gov.uk/OAS/Account/Create')
  })

  // Pass the question in to the page
  router.get('/application/transition-OCJ/', function (req, res) {
    res.render('application/transition-OCJ/index', content)
  })

  // END__######################################################################################################
}
