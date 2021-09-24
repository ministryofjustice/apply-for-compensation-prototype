module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/save-and-return-post/i-means-of-saving/save-button', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];
    if (buttonClicked === 'Continue') {

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/save-and-return-pre/option-2/_10-end/check-your-answers-page')
      }
      res.redirect('#')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-post/i-means-of-saving/confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-post/i-means-of-saving/save-button/', function (req, res) {
    res.render('concepts/save-and-return-post/i-means-of-saving/save-button/index', content)
  })

  router.get('/concepts/save-and-return-post/i-means-of-saving/save-button/error-no-title', function (req, res) {
    res.render('concepts/save-and-return-post/i-means-of-saving/save-button/error-no-title', content)
  })

  router.get('/concepts/save-and-return-post/i-means-of-saving/save-button/error-no-first-name', function (req, res) {
    res.render('concepts/save-and-return-post/i-means-of-saving/save-button/error-no-first-name', content)
  })

  router.get('/concepts/save-and-return-post/i-means-of-saving/save-button/error-no-last-name', function (req, res) {
    res.render('concepts/save-and-return-post/i-means-of-saving/save-button/error-no-last-name', content)
  })
  // END__######################################################################################################
}
