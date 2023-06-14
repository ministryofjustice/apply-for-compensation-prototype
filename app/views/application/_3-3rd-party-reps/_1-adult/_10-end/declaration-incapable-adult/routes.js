module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/confirmation-page')
    } else {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/error')
    }
  })

  router.post('/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/confirmation-page')
    } else {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/error')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_10-end/declaration-incapable-adult/error', content)
  })

  // END__######################################################################################################
}
