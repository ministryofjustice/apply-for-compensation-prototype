module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_2-minors/_9-additional-info/context-additional-info', function (req, res) {
    res.redirect('/application/_2-minors/_9-additional-info/additional-info-question')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_9-additional-info/context-additional-info/', function (req, res) {
    res.render('application/_2-minors/_9-additional-info/context-additional-info/index', content)
  })
  // END__######################################################################################################
}
