module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name-have-other')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/error-no-title', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/error-no-title', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/error-no-first-name', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/error-no-first-name', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/error-no-last-name', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
