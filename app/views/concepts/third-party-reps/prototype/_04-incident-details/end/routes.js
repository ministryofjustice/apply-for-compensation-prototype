module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_04-incident-details/end', function (req, res) {
    req.session.data = {}   // clear all session data
    res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/fatal-application')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details/end/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details/end/index', content)
  })
  // END__######################################################################################################
}
