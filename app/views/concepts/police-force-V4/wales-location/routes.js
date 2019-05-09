module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-force-v4/wales-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/concepts/police-force-v4/do-you-know-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v4/wales-location/', function (req, res) {
    res.render('concepts/police-force-v4//wales-location/index', content)
  })

  // END__######################################################################################################
}
