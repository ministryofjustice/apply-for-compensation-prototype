module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/application/mental-injuries', function (req, res) {
    // Get the answer from the query string
   var DMI = req.session.data['DMI']
    if (DMI === 'no') {
       return res.redirect('/application/physical-injury')
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
