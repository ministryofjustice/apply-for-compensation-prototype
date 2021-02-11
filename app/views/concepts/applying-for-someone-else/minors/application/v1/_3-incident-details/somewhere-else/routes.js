module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/somewhere-else', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
   }
   res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/somewhere-else/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
