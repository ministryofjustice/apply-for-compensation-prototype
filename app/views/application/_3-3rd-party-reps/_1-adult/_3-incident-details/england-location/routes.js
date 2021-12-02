module.exports = function (router, content) {
  // START__####################################################################################################
  // File: england-location
  //

  router.post('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // Get the answer from the query string
      var crimeReported = req.session.data['crimeReported']

      if (crimeReported === 'No')  {

        // set section status for task list
        req.session.data['about_the_crime_status'] = 'completed'

        // Redirect to the relevant page
        res.redirect('/application/_3-3rd-party-reps/_1-adult/_4-offender/context-contact-with-offender')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/crime-reported-date')
      }

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })


  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/error-town', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/error-town', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/error-location', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-incident-details/england-location/error-location', content)
  })
  // END__######################################################################################################
}
