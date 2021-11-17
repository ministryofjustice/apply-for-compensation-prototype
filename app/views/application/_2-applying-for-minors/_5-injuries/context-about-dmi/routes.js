module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_2-applying-for-minors/_5-injuries/context-about-dmi', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_5-injuries/dmi')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_5-injuries/context-about-dmi/', function (req, res) {
    res.render('application/_2-applying-for-minors/_5-injuries/context-about-dmi/index', content)
  })
  // END__######################################################################################################
}
