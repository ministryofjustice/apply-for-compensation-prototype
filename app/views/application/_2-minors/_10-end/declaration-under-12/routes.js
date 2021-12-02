module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/application/_2-minors/_10-end/declaration-under-12', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/application/_2-minors/_10-end/confirmation-page')
    } else {
      res.redirect('/application/_2-minors/_10-end/declaration-under-12/error')
    }
  })

  router.post('/application/_2-minors/_10-end/declaration-under-12/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {
      res.redirect('/application/_2-minors/_10-end/confirmation-page')
    } else {
      res.redirect('/application/_2-minors/_10-end/declaration-under-12/error')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_10-end/declaration-under-12/', function (req, res) {
    res.render('application/_2-minors/_10-end/declaration-under-12/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_10-end/declaration-under-12/error', function (req, res) {
    res.render('application/_2-minors/_10-end/declaration-under-12/error', content)
  })

  // END__######################################################################################################
}
