module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/application/_4-offender/what-is-relationship', function (req, res) {

    var incidentType = req.session.data['incidentType']

    if (incidentType === 'Witnessing an incident') {
        // Redirect to the relevant page
        res.redirect('/application/_5-injuries/context-about-dmi')
    } else {
      res.redirect('/application/_5-injuries/context-physical-injuries')
    }
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/what-is-relationship/', function (req, res) {
    res.render('application/_4-offender/what-is-relationship/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/what-is-relationship/error', function (req, res) {
    res.render('application/_4-offender/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
