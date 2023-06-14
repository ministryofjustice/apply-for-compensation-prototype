module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/application/_2-minors/_4-offender/offender-name', function (req, res) {
      res.redirect('/application/_2-minors/_4-offender/contact-with-offender')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_4-offender/offender-name/', function (req, res) {
    res.render('application/_2-minors/_4-offender/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/_2-minors/_4-offender/offender-name/error', function (req, res) {
    res.render('application/_2-minors/_4-offender/offender-name/error', content)
  })
  // END__######################################################################################################
}
