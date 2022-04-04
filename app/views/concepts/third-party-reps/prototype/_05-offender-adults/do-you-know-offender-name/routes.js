module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-know-offender-name
  // Variable: know-offender

  router.post('/concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name', function (req, res) {

      // Get the answer from the query string
      var knowOffender = req.session.data['know-offender']
      var incidentType = req.session.data['incidentType']

      if (knowOffender === 'No')  {

        // set section status to completed
        req.session.data['about_the_offender_status'] = 'completed'

        // Redirect to the relevant page
        if (incidentType === 'Witnessing an incident') {
            // Redirect to the relevant page
            res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-about-dmi')
        } else {
          res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-physical-injuries')
        }
      } else {

        // set section status to completed
        req.session.data['about_the_offender_status'] = 'in progress'

        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_05-offender-adults/offender-name')
      }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name/error', content)
  })
  // END__######################################################################################################
}
