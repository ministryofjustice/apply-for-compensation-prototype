module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported', function (req, res) {

       var crimeReported = req.session.data['crimeReported']

        if (crimeReported === 'No') {
           return res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/not-reported')
        } else {
          res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference')
        }
  })

  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/not-reported', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/not-reported', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/incident-reported/not-reported', content)
  })

  // END__######################################################################################################
}
