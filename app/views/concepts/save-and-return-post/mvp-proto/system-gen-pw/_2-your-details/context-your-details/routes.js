module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/context-your-details', function (req, res) {
    res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/context-your-details/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/context-your-details/index', content)
  })
  // END__######################################################################################################
}
