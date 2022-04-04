module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-know-offender-name
  // Variable: know-offender

  router.post('/concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name', function (req, res) {
    // Get the answer from the query string
    var knowOffender = req.session.data['know-offender']
    var incidentType = req.session.data['incidentType']

    if (knowOffender === 'No')  {
      // Redirect to the relevant page
      if (incidentType === 'Witnessing an incident') {
          // Redirect to the relevant page
          res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries')
      }
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_05-offender-minors/offender-name')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name/error', content)
  })
  // END__######################################################################################################
}
