module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/save-and-return-post/mvp-proto/system-gen-pw/mismatch', function (req, res) {
    res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-unique-token')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/system-gen-pw/mismatch/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/system-gen-pw/mismatch/index', content)
  })
  // END__######################################################################################################
}
