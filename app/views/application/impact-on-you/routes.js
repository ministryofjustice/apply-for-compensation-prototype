module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/impact-on-you', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/your-choices')
  })

  // Pass the question in to the page
  router.get('/application/impact-on-you/', function (req, res) {
    res.render('application/impact-on-you/index', content)
  })
  // END__######################################################################################################
}
