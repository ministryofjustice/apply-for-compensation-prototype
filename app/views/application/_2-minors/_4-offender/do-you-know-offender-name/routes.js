module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-know-offender-name
  // Variable: know-offender

  router.post('/application/_2-minors/_4-offender/do-you-know-offender-name', function (req, res) {
    // Get the answer from the query string
    var knowOffender = req.session.data['know-offender']
    var incidentType = req.session.data['incidentType']

    if (knowOffender === 'No')  {
      // Redirect to the relevant page
      if (incidentType === 'Witnessing an incident') {
          // Redirect to the relevant page
          res.redirect('/application/_2-minors/_5-injuries/context-about-dmi')
      } else {
        res.redirect('/application/_2-minors/_5-injuries/context-physical-injuries')
      }
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-minors/_4-offender/offender-name')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_4-offender/do-you-know-offender-name/', function (req, res) {
    res.render('application/_2-minors/_4-offender/do-you-know-offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/_2-minors/_4-offender/do-you-know-offender-name/error', function (req, res) {
    res.render('application/_2-minors/_4-offender/do-you-know-offender-name/error', content)
  })
  // END__######################################################################################################
}
