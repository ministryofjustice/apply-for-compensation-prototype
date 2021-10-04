module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/resume-passcode', function (req, res) {

    var knowPassword = req.session.data['know-password'];
    var reference = req.session.data['save-and-return-reference'];
    var password = req.session.data['password'];
    var userPassword = req.session.data['userPassword'];


    if (knowPassword === 'Yes') {

      if ((reference === 'ABC123') && (password == userPassword)) {
        res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/application-progress/')
      } else {
        res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/mismatch/')
      }
    } else if (knowPassword === 'No') {
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/must-start-new/')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/resume-passcode/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/resume-passcode/index', content)
  })

  // END__######################################################################################################
}
