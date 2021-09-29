module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/save-and-return-post/mvp-proto/confirmation', function (req, res) {
    res.redirect('/concepts/save-and-return-post/mvp-proto/send-confirmation-question')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/confirmation/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/confirmation/index', content)
  })
  // END__######################################################################################################
}
