module.exports = function (router, content) {
  // START__####################################################################################################
  // File: scotland-location
  //

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location', function (req, res) {
    // Get the answer from the query string
    var crimeReported = req.session.data['crimeReported']

    if (crimeReported === 'No')  {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/crime-reported-date')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/error-town', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/error-town', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/error-location', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/error-location', content)
  })
  // END__######################################################################################################
}
