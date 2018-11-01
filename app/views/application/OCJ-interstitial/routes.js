module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/OCJ-interstitial', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/28-weeks')
  })

  // Pass the question in to the page
  router.get('/application/OCJ-interstitial/', function (req, res) {
    res.render('application/OCJ-interstitial/index', content)
  })
  // END__######################################################################################################
}
