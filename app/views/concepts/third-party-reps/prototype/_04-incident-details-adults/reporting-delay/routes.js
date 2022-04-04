module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-delay
  //
  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay', function (req, res) {

      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/police-force')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/error-checkboxes', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when text field is left empty
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/error-explain', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay/error-explain', content)
  })
  // END__######################################################################################################
}
