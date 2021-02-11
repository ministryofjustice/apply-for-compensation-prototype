module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi/index', content)
  })
  // END__######################################################################################################
}
