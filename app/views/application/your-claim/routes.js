module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/your-claim', function (req, res) {
    res.redirect('/application/context-about-dmi')
  })

  // Pass the question in to the page
  router.get('/application/your-claim/', function (req, res) {
    res.render('application/your-claim/index', content)
  })
  // END__######################################################################################################
}
