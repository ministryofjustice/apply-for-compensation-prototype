module.exports = function (router, content) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/srr/preferred-days', function (req, res) {

      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/srr/preferred-days')
      }
      res.redirect('/srr/preferred-times')
  })

  // Pass the question in to the page
  router.get('/srr/preferred-days/', function (req, res) {
    res.render('srr/preferred-days/index', content)
  })

  // Pass the error content in to the page
  router.get('/srr/preferred-days/error', function (req, res) {
    res.render('srr/preferred-days/error', content)
  })
  // END__######################################################################################################
}
