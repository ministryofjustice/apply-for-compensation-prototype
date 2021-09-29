module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-post/mvp-proto/resume-passcode', function (req, res) {

    var knowPassword = req.session.data['know-password'];
    var reference = req.session.data['save-and-return-reference'];
    var password = req.session.data['password'];


    if (knowPassword === 'Yes') {

      if ((reference === 'ABC123') && (password === 'threerandomwords')) {
        res.redirect('/concepts/save-and-return-post/mvp-proto/application-progress/')
      } else {
        res.redirect('/concepts/save-and-return-post/mvp-proto/mismatch/')
      }
    } else if (knowPassword === 'No') {
      res.redirect('/concepts/save-and-return-post/mvp-proto/must-start-new/')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/resume-passcode/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/resume-passcode/index', content)
  })

  // END__######################################################################################################
}
