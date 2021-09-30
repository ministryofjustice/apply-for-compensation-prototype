module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/phone-number', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {
        return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/phone-number/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/phone-number/index', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/phone-number/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
