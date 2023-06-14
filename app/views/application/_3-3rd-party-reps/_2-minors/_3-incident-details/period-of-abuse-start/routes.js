module.exports = function (router, content) {
  // START__####################################################################################################
  // File: period-of-abuse-start
  //
  router.post('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-end')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/error-past', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/error-past', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/error-before-reported', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/error-before-reported', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/error-incomplete', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/period-of-abuse-start/error-incomplete', content)
  })
  // END__######################################################################################################
}
