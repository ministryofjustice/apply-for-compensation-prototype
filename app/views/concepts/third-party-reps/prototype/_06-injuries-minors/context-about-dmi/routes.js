module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/dmi')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_06-injuries-minors/context-about-dmi/index', content)
  })
  // END__######################################################################################################
}
