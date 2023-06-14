module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/concepts/third-party-reps/prototype/_11-end-minors/declaration', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/confirmation-page')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/declaration/error')
    }
  })

  router.post('/concepts/third-party-reps/prototype/_11-end-minors/declaration/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/confirmation-page')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/declaration/error')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-end-minors/declaration/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-end-minors/declaration/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-end-minors/declaration/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-end-minors/declaration/error', content)
  })

  // END__######################################################################################################
}
