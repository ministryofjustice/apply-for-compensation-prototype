module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words', function (req, res) {
    // Get the answer from the query string
      res.redirect('/concepts/third-party-reps/prototype/_05-offender-minors/context-contact-with-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/own-words/transition', content)
  })
  // END__######################################################################################################
}
