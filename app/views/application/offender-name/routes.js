module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/application/offender-name', function (req, res) {
      res.redirect('/application/ongoing-relationship')
  })

  // Pass the question in to the page
  router.get('/application/offender-name/', function (req, res) {
    res.render('application/offender-name/index', content)
  })
  // END__######################################################################################################
}
