module.exports = function (router, content) {
  // START__####################################################################################################
  // File: physical-injuries
  // Variable: incidentReported
  router.post('/application/physical-injuries', function (req, res) {
    // Get the answer from the query string

       return res.redirect('/application/mental-injuries')
     
  })

  // Pass the question in to the page
  router.get('/application/physical-injuries/', function (req, res) {
    res.render('application/physical-injuries/index', content)
  })
  // END__######################################################################################################
}
