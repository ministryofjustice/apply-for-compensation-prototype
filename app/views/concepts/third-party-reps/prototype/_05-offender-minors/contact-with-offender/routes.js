module.exports = function (router, content) {
  // START__####################################################################################################
  // File: contact-with-offender
  // Variable: know-offender

  router.post('/concepts/third-party-reps/prototype/_05-offender-minors/contact-with-offender', function (req, res) {
    // Get the answer from the query string
    var contactOffender = req.session.data['contact-offender']
    var incidentType = req.session.data['incidentType']

    if (contactOffender !== 'Yes')  {
      // Redirect to the relevant page
      if (incidentType === 'Witnessing an incident') {
          // Redirect to the relevant page
          res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/context-physical-injuries')
      }
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_05-offender-minors/what-is-relationship')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/contact-with-offender/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/contact-with-offender/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/contact-with-offender/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/contact-with-offender/error', content)
  })
  // END__######################################################################################################
}
