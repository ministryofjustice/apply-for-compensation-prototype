module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_0-start-screens/save-confirmation', function (req, res) {
    res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/send-confirmation-question')
  })

  // Pass the question in to the page
  router.get('/application/_0-start-screens/save-confirmation/', function (req, res) {
    res.render('application/_0-start-screens/save-confirmation/index', content)
  })
  // END__######################################################################################################
}
