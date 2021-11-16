module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];
    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_10-end/check-your-answers-page')
      }
      res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name-have-other')

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/user-gen-pw/confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/index', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/error-no-title', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/error-no-title', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/error-no-first-name', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/error-no-first-name', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/error-no-last-name', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/user-gen-pw/_2-your-details/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
