module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/concepts/save-and-return/option-1/_1-qualifying/incident-reported', function (req, res) {
    // Get the answer from the query string
   var crimeReported = req.session.data['crimeReported']
    if (crimeReported === 'No') {
       return res.redirect('/concepts/save-and-return/option-1/_1-qualifying/incident-reported/not-reported')
    } else {
      res.redirect('/concepts/save-and-return/option-1/_1-qualifying/crime-reference')
    }
  })

  router.post('/concepts/save-and-return/option-1/_1-qualifying/incident-reported/not-reported', function (req, res) {
    res.redirect('/concepts/save-and-return/option-1/_1-qualifying/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-1/_1-qualifying/incident-reported/', function (req, res) {
    res.render('concepts/save-and-return/option-1/_1-qualifying/incident-reported/index', content)
  })

  router.get('/concepts/save-and-return/option-1/_1-qualifying/incident-reported/not-reported', function (req, res) {
    res.render('concepts/save-and-return/option-1/_1-qualifying/incident-reported/not-reported', content)
  })

  //error page
  router.get('/concepts/save-and-return/option-1/_1-qualifying/incident-reported/error', function (req, res) {
    res.render('concepts/save-and-return/option-1/_1-qualifying/incident-reported/error', content)
  })
  // END__######################################################################################################
}
