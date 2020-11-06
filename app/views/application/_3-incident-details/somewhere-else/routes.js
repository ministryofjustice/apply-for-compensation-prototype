module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_3-incident-details/somewhere-else', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/_9-end/check-your-answers-page')
   }
   res.redirect('/application/_3-incident-details/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/somewhere-else/', function (req, res) {
    res.render('application/_2-your-details/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
