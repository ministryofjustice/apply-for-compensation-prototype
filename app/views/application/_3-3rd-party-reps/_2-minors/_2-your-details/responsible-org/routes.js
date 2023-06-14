module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsible-org
  // Variable: responsible-org

  router.post('/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsible-org', function (req, res) {

      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_3-3rd-party-reps/_2-minors/_10-end/check-your-answers-page')
      }
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-your-details/address')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsible-org/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/responsible-org/index', content)
  })

  // Pass the error content in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsible-org/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/responsible-org/error', content)
  })
  // END__######################################################################################################
}
