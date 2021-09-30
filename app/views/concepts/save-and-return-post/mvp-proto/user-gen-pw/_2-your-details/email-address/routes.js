module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/email-address', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      if (!req.session.data['emailAddress']) {
        req.session.data['emailAddress'] = 'name@domain.com'
      }
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/freetext')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/confirmation')
    }


  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/email-address/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/email-address/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/email-address/error', content)
  })
  // END__######################################################################################################
}
