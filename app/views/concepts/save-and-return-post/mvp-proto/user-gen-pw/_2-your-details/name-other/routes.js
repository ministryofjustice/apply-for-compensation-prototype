module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-other', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/date-of-birth')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-other/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-other/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-other/error', content)
  })
  // END__######################################################################################################
}