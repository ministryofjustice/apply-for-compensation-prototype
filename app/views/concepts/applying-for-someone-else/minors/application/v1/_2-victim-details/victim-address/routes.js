module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address', function (req, res) {
    // Get the answer from the query string
    var victimLivesWithApplicant = req.session.data['victimLivesWithApplicant']

    if (victimLivesWithApplicant === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/context-incident-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/error-building-street-blank', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/error-building-street-blank', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/error-town-city-blank', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/error-town-city-blank', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/error-postcode', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/victim-address/error-postcode', content)
  })
  // END__######################################################################################################
}
