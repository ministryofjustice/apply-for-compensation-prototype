module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/application/_0-start-and-qualifying/incident-reported', function (req, res) {

       var crimeReported = req.session.data['crimeReported']

        if (crimeReported === 'No') {
           return res.redirect('/application/_0-start-and-qualifying/incident-reported/not-reported')
        } else {
          res.redirect('/application/_0-start-and-qualifying/crime-reference')
        }
  })

  router.post('/application/_0-start-and-qualifying/incident-reported/not-reported', function (req, res) {
    res.redirect('/application/_0-start-and-qualifying/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/incident-reported/', function (req, res) {
    res.render('application/_0-start-and-qualifying/incident-reported/index', content)
  })

  router.get('/application/_0-start-and-qualifying/incident-reported/not-reported', function (req, res) {
    res.render('application/_0-start-and-qualifying/incident-reported/not-reported', content)
  })

  //error page
  router.get('/application/_0-start-and-qualifying/incident-reported/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/incident-reported/error', content)
  })
  // END__######################################################################################################
}
