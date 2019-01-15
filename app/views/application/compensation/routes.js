module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/compensation', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/name')
 })

 // Pass the question in to the page
 router.get('/application/compensation/', function (req, res) {
   res.render('application/compensation/index', content)
 })

 // Pass the Error state in to the page when no radios are selected
 router.get('/application/compensation/error-no-radio', function (req, res) {
   res.render('application/compensation/error-no-radio', content)
 })
  // END__######################################################################################################
}
