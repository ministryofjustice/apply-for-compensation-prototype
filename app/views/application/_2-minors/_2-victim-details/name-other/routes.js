module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_2-minors/_2-victim-details/name-other', function (req, res) {
    res.redirect('/application/_2-minors/_2-victim-details/date-of-birth')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_2-victim-details/name-other/', function (req, res) {
    res.render('application/_2-minors/_2-victim-details/name-other/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_2-minors/_2-victim-details/name-other/error', function (req, res) {
    res.render('application/_2-minors/_2-victim-details/name-other/error', content)
  })
  // END__######################################################################################################
}
