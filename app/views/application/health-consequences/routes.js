module.exports = function (router, content) {
  // START__####################################################################################################
  // File: physical-injuries
  // Variable: incidentReported
  router.post('/application/health-consequences', function (req, res) {
    // Get the answer from the query string

       return res.redirect('/application/other-consequences')

  })

  // Pass the question in to the page
  router.get('/application/health-consequences/', function (req, res) {
    res.render('application/health-consequences/index', content)
  })
  // END__######################################################################################################
}
