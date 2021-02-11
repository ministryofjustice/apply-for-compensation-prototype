module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/what-is-relationship', function (req, res) {

    var incidentType = req.session.data['incidentType']

    if (incidentType === 'Witnessing an incident') {
        // Redirect to the relevant page
        res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-physical-injuries')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/what-is-relationship/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_4-offender/what-is-relationship/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/what-is-relationship/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_4-offender/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
