module.exports = function (router, content) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/srr/preferred-times', function (req, res) {

      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/srr/preferred-times')
      }
      res.redirect('/srr/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/srr/preferred-times/', function (req, res) {
    res.render('srr/preferred-times/index', content)
  })

  // Pass the error content in to the page
  router.get('/srr/preferred-times/error', function (req, res) {
    res.render('srr/preferred-times/error', content)
  })
  // END__######################################################################################################
}
