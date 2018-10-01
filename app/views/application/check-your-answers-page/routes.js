module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
  // Variable: checking_answers is a session variable to know if we go back to this page or not when a user press 'continue' on some question pages
   router.post('/application/check-your-answers-page', function (req, res) {
     req.session.checking_answers = true // this is initially set to false on the declaration page to avoid false results if using the prototype more than once
     return res.render('application/check-your-answers-page')
   })

   // Pass the question in to the page
   router.get('/application/check-your-answers-page/', function (req, res) {
     res.render('application/check-your-answers-page/index', content)
   })
  // END__######################################################################################################
}
