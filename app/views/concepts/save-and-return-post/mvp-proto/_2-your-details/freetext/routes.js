module.exports = function (router, content) {
  // START__####################################################################################################
  // File: freetext
  //
  router.post('/concepts/save-and-return-post/mvp-proto/_2-your-details/freetext', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/save-and-return-post/mvp-proto/_10-end/check-your-answers-page')
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-post/mvp-proto/confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/mvp-proto/_2-your-details/freetext/', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/_2-your-details/freetext/index', content)
  })

  router.get('/concepts/save-and-return-post/mvp-proto/_2-your-details/freetext/error', function (req, res) {
    res.render('concepts/save-and-return-post/mvp-proto/_2-your-details/freetext/error', content)
  })
  // END__######################################################################################################
}
