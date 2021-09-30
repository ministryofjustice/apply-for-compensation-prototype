module.exports = function (router, content) {
  // START__####################################################################################################
  // File: freetext
  //
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];
    if (buttonClicked === 'Continue') {
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/end')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext/index', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext/error', content)
  })
  // END__######################################################################################################
}
