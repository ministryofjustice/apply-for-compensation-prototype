module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/gender', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/date-of-birth')
 })

 // Renders the page
 router.get('/application/gender/', function (req, res) {
   res.render('application/gender/index', content)
 })

 // Error if nothing selected
 router.get('/application/gender/error', function (req, res) {
   res.render('application/gender/error', content)
 })
  // END__######################################################################################################
}
