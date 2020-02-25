module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/other-compensation-why-not', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/context-your-details')
 })

 // Pass the question in to the page
 router.get('/application/other-compensation-why-not/', function (req, res) {
   res.render('application/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
