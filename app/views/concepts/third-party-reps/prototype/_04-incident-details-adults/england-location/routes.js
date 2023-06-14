module.exports = function (router, content) {
  // START__####################################################################################################
  // File: england-location
  //

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/england-location', function (req, res) {

      // Get the answer from the query string
      var crimeReported = req.session.data['crimeReported']

      if (crimeReported === 'No')  {

        // set section status for task list
        req.session.data['about_the_crime_status'] = 'completed'

        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_05-offender-adults/context-contact-with-offender')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date')
      }
  })


  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/error-town', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/error-town', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/error-location', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/england-location/error-location', content)
  })
  // END__######################################################################################################
}
