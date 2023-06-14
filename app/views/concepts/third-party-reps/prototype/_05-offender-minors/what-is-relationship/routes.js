module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship', function (req, res) {

    var incidentType = req.session.data['incidentType']

    if (incidentType === 'Witnessing an incident') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
