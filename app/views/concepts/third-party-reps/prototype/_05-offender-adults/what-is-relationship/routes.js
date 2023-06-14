module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/third-party-reps/prototype/_05-offender-adults/what-is-relationship', function (req, res) {

      var incidentType = req.session.data['incidentType']

      // set section status to completed
      req.session.data['about_the_offender_status'] = 'completed'

      if (incidentType === 'Witnessing an incident') {
          // Redirect to the relevant page
          res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-about-dmi')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-physical-injuries')
      }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/what-is-relationship/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/what-is-relationship/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/what-is-relationship/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
