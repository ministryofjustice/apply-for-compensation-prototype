module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_2-minors/_3-incident-details/crime-reference', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/_2-minors/_10-end/check-your-answers-page')
   }
   res.redirect('/application/_2-minors/_3-incident-details/own-words-question')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_3-incident-details/crime-reference/', function (req, res) {
    res.render('application/_2-minors/_3-incident-details/crime-reference/index', content)
  })

  router.get('/application/_2-minors/_3-incident-details/crime-reference/error', function (req, res) {
    res.render('application/_2-minors/_3-incident-details/crime-reference/error', content)
  })
  // END__######################################################################################################
}
