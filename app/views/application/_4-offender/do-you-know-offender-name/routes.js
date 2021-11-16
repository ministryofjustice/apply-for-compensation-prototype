module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-know-offender-name
  // Variable: know-offender

  router.post('/application/_4-offender/do-you-know-offender-name', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // Get the answer from the query string
      var knowOffender = req.session.data['know-offender']
      var incidentType = req.session.data['incidentType']

      if (knowOffender === 'No')  {

        // set section status to completed
        req.session.data['about_the_offender_status'] = 'completed'

        // Redirect to the relevant page
        if (incidentType === 'Witnessing an incident') {
            // Redirect to the relevant page
            res.redirect('/application/_5-injuries/context-about-dmi')
        } else {
          res.redirect('/application/_5-injuries/context-physical-injuries')
        }
      } else {

        // set section status to completed
        req.session.data['about_the_offender_status'] = 'in progress'

        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_4-offender/offender-name')
      }

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/application/_4-offender/do-you-know-offender-name/', function (req, res) {
    res.render('application/_4-offender/do-you-know-offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/_4-offender/do-you-know-offender-name/error', function (req, res) {
    res.render('application/_4-offender/do-you-know-offender-name/error', content)
  })
  // END__######################################################################################################
}
