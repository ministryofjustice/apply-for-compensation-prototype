module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/you', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/you/index', content)
  })
  // END__######################################################################################################
}
