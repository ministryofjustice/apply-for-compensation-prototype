module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/address', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/error-building-street-blank', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/error-building-street-blank', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/error-town-city-blank', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/error-town-city-blank', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/error-postcode', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/address/error-postcode', content)
  })
  // END__######################################################################################################
}
