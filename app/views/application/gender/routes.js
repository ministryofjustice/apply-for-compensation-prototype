module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/gender', function (req, res) {
    res.redirect('/application/date-of-birth')
  })

  // Pass the question in to the page
  router.get('/application/gender/', function (req, res) {
    res.render('application/gender/index', content)
  })

  router.get('/application/gender/error', function (req, res) {
    res.render('application/gender/error', content)
  })


  // END__######################################################################################################
}
