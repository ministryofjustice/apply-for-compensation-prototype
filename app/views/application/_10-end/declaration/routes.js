module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/application/_10-end/declaration', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/application/_10-end/confirmation-page')
    } else {
      res.redirect('/application/_10-end/declaration/error')
    }
  })

  router.post('/application/_10-end/declaration/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/application/_10-end/confirmation-page')
    } else {
      res.redirect('/application/_10-end/declaration/error')
    }
  })

  // Pass the question in to the page
  router.get('/application/_10-end/declaration/', function (req, res) {
    res.render('application/_10-end/declaration/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_10-end/declaration/error', function (req, res) {
    res.render('application/_10-end/declaration/error', content)
  })

  // END__######################################################################################################
}
