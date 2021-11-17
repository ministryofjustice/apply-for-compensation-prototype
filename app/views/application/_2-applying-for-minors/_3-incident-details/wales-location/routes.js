module.exports = function (router, content) {
  // START__####################################################################################################
  // File: wales-location
  //

  router.post('/application/_2-applying-for-minors/_3-incident-details/wales-location', function (req, res) {
    // Get the answer from the query string
    var crimeReported = req.session.data['crimeReported']

    if (crimeReported === 'No')  {
      // Redirect to the relevant page
      res.redirect('/application/_2-applying-for-minors/_3-incident-details/own-words-question')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-applying-for-minors/_3-incident-details/crime-reported-date')
    }
  })


  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_3-incident-details/wales-location/', function (req, res) {
    res.render('application/_2-applying-for-minors/_3-incident-details/wales-location/index', content)
  })

  router.get('/application/_2-applying-for-minors/_3-incident-details/wales-location/error-town', function (req, res) {
    res.render('application/_2-applying-for-minors/_3-incident-details/wales-location/error-town', content)
  })

  router.get('/application/_2-applying-for-minors/_3-incident-details/wales-location/error-location', function (req, res) {
    res.render('application/_2-applying-for-minors/_3-incident-details/wales-location/error-location', content)
  })
  // END__######################################################################################################
}
