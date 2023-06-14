module.exports = function (router, content) {
  // START__####################################################################################################
  // File: scotland-location
  //

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location', function (req, res) {
    // Get the answer from the query string
    var crimeReported = req.session.data['crimeReported']

    if (crimeReported === 'No')  {
      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words-question')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/crime-reported-date')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/error-town', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/error-town', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/error-location', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location/error-location', content)
  })
  // END__######################################################################################################
}
