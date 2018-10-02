module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/application/mental-injuries-symptoms', function (req, res) {
    // Get the answer from the query string
   var crimeReported = req.session.data['crimeReported']
    if (crimeReported === 'no') {
       return res.redirect('/application/reporting-crime-not-reported')
    } else {
      res.redirect('/application/crime-reported-date')
    }
  })

  // Pass the question in to the page
  router.get('/application/incident-reported/', function (req, res) {
    res.render('application/incident-reported/index', content)
  })
  // END__######################################################################################################
}
