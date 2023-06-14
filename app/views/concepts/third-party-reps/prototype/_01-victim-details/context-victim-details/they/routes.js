module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/they', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/name/they')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/they/index', content)
  })
  // END__######################################################################################################
}
