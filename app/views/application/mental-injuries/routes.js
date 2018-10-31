module.exports = function (router, content) {
  // START__####################################################################################################
  // File: mental-injuries
  // Variable: incidentReported
  router.post('/application/mental-injuries', function (req, res) {
    // Get the answer from the query string
   
       return res.redirect('/application/other-consequences')

  })

  // Pass the question in to the page
  router.get('/application/mental-injuries/', function (req, res) {
    res.render('application/mental-injuries/index', content)
  })
  // END__######################################################################################################
}
