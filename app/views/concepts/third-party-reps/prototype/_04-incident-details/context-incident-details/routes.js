module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/end')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details/context-incident-details/index', content)
  })
  // END__######################################################################################################
}
