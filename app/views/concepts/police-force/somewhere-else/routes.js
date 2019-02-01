module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-force/somewhere-else', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/concepts/police-force/somewhere-else')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force/somewhere-else/', function (req, res) {
    res.render('concepts/police-force/somewhere-else/index', content)
  })

  router.get('/concepts/police-force/somewhere-else/error', function (req, res) {
    res.render('concepts/police-force/somewhere-else/error', content)
  })
  // END__######################################################################################################
}
