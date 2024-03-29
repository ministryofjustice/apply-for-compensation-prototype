module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words', function (req, res) {
    // Get the answer from the query string
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_4-offender/context-contact-with-offender')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/index', content)
  })
  //error page
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/error', content)
  })
  //error page
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/transition', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/own-words/transition', content)
  })
  // END__######################################################################################################
}
