module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-unique-token', function (req, res) {

    var knowReference = req.session.data['know-reference'];

    if (knowReference === 'Yes') {
      res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-passcode/')
    } else if (knowReference === 'No') {
      res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/must-start-new/')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-unique-token/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/system-gen-pw/resume-unique-token/index', content)
  })

  // END__######################################################################################################
}
