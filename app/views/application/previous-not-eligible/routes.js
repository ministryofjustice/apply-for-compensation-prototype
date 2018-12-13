module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Reporting-crime-not-reported
  // Variable: none

  router.post('/application/previous-not-eligible', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/compensation')
  })

  // Pass the question in to the page
  router.get('/application/previous-not-eligible/', function (req, res) {
    res.render('application/previous-not-eligible/index', content)
  })

  // END__######################################################################################################
}
