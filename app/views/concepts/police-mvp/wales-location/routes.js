module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-mvp/wales-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/concepts/police-mvp/welsh-forces')
  })

  // Pass the question in to the page
  router.get('/concepts/police-mvp/wales-location/', function (req, res) {
    res.render('concepts/police-mvp/wales-location/index', content)
  })

  router.get('/concepts/police-mvp/wales-location/error', function (req, res) {
    res.render('concepts/police-mvp/wales-location/error', content)
  })
  // END__######################################################################################################
}
