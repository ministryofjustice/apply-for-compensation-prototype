module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/application/_1-qualifying/incident-reported', function (req, res) {
    // Get the answer from the query string
   var crimeReported = req.session.data['crimeReported']
    if (crimeReported === 'No') {
       return res.redirect('/application/_1-qualifying/incident-reported/not-reported')
    } else {
      res.redirect('/application/_2-your-details/context-your-details')
    }
  })

  router.post('/application/_1-qualifying/incident-reported/not-reported', function (req, res) {
    res.redirect('/application/_2-your-details/context-your-details')
  })

  // Pass the question in to the page
  router.get('/application/_1-qualifying/incident-reported/', function (req, res) {
    res.render('application/_1-qualifying/incident-reported/index', content)
  })

  router.get('/application/_1-qualifying/incident-reported/not-reported', function (req, res) {
    res.render('application/_1-qualifying/incident-reported/not-reported', content)
  })

  //error page
  router.get('/application/_1-qualifying/incident-reported/error', function (req, res) {
    res.render('application/_1-qualifying/incident-reported/error', content)
  })
  // END__######################################################################################################
}
