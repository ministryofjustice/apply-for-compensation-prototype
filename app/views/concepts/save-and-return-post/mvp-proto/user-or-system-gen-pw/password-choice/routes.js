module.exports = function (router, content) {
  // START__####################################################################################################
  // File: password-choice
  // Variable: direct-applicant

  router.post('/concepts/save-and-return-post/mvp-proto/user-or-system-gen-pw/password-choice', function (req, res) {
    // Get the answer from the query string
    var passwordChoice = req.session.data['passwordChoice']

    if (passwordChoice === 'create') {
      // Redirect to the relevant page
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/credentials')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/credentials')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-or-system-gen-pw/password-choice/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-or-system-gen-pw/password-choice/index', content)
  })
  // Error state
  router.get('/concepts/save-and-return-post/mvp-proto/user-or-system-gen-pw/password-choice/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-or-system-gen-pw/password-choice/error', content)
  })
  // END__######################################################################################################
}
