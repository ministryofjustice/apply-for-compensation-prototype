module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/application/_2-minors/_2-your-details/phone-number', function (req, res) {
    res.redirect('/application/_2-minors/_2-your-details/what-is-relationship')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_2-your-details/phone-number/', function (req, res) {
    res.render('application/_2-minors/_2-your-details/phone-number/index', content)
  })

  router.get('/application/_2-minors/_2-your-details/phone-number/error', function (req, res) {
    res.render('application/_2-minors/_2-your-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
