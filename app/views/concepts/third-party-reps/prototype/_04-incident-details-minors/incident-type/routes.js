module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-type
  // Variable: sexualAssault

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/index', content)
  })
  // Error stconcepts/third-party-reps/prototype/_04-incident-details-minors/
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/error', content)
  })
  // Transition state
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/incident-type/transition', content)
  })
  // END__######################################################################################################
}
