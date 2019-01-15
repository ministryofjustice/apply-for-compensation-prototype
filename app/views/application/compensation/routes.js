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

 // Pass the Error state in to the page when yes is selected but user enters no text in who did you apply to field
 router.get('/application/compensation/error-yes-no-source', function (req, res) {
   res.render('application/compensation/error-yes-no-source', content)
 })

 // Pass the Error state in to the page when yes is selected but user enters no text in the amount field
 router.get('/application/compensation/error-yes-no-amount', function (req, res) {
   res.render('application/compensation/error-yes-no-amount', content)
 })

 // Pass the Error state in to the page when yes but still waiting is selected but user enters no text in source field
 router.get('/application/compensation/error-waiting-no-source', function (req, res) {
   res.render('application/compensation/error-waiting-no-source', content)
 })
  // END__######################################################################################################
}
