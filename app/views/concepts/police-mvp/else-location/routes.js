module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-mvp/else-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/')
  })

  // Pass the question in to the page
  router.get('/concepts/police-mvp/else-location/', function (req, res) {
    res.render('concepts/police-mvp/else-location/index', content)
  })

  router.get('/concepts/police-mvp/else-location/error', function (req, res) {
    res.render('concepts/police-mvp/else-location/error', content)
  })
  // END__######################################################################################################
}
