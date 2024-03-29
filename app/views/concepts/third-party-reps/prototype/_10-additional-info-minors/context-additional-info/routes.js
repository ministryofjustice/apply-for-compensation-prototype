module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_11-additional-info-minors/context-additional-info', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/context-additional-info/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/context-additional-info/index', content)
  })
  // END__######################################################################################################
}
