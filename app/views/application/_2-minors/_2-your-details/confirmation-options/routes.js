module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/_2-minors/_2-your-details/confirmation-options', function (req, res) {

    var confirmationPreference = req.session.data['confirmationPreference']

    if ((confirmationPreference === 'Email') || (confirmationPreference === 'Text')) {
      res.redirect('/application/_2-minors/_2-your-details/name')
    } else {
      res.redirect('/application/_2-minors/_2-your-details/confirmation-options/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_2-your-details/confirmation-options/', function (req, res) {
    res.render('application/_2-minors/_2-your-details/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/application/_2-minors/_2-your-details/confirmation-options/transition', function (req, res) {
    res.render('application/_2-minors/_2-your-details/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
