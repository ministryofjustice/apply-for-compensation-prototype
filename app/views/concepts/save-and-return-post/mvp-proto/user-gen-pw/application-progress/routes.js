module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/application-progress', function (req, res) {

    var screenExited = req.session.data['screen-exited']

    if ( screenExited === undefined ) {
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/context-your-details')
    } else {
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/' + screenExited)
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/application-progress/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/application-progress/index', content)
  })

  // END__######################################################################################################
}
