module.exports = function (router, content) {
  // START__####################################################################################################
  // File: freetext
  //
  router.post('/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/freetext', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];
    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {
      res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/end')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/system-gen-pw/confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/freetext/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/freetext/index', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/freetext/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/system-gen-pw/_2-your-details/freetext/error', content)
  })
  // END__######################################################################################################
}
