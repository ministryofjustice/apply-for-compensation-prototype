module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/name-other', function (req, res) {
    res.redirect('/application/date-of-birth')
  })

  // Pass the question in to the page
  router.get('/application/name-other/', function (req, res) {
    res.render('application/name-other/index', content)
  })
  // END__######################################################################################################
}
