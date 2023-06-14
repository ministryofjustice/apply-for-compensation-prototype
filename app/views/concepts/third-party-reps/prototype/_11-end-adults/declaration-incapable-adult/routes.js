module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/confirmation-page')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/error')
    }
  })

  router.post('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/confirmation-page')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/error')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult/error', content)
  })

  // END__######################################################################################################
}
