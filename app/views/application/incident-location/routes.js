module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/application/incident-location', function (req, res) {

          // Get the answer from the query string
          var incidentlocation = req.session.data['incidentlocation']

          if (incidentlocation === 'England') {
            // Redirect to the relevant page
            res.redirect('/application/England-Regions')
          }


    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/reporting-details-what-force')
  })

  // Pass the question in to the page
  router.get('/application/incident-location/', function (req, res) {
    res.render('application/incident-location/index', content)
  })
  // END__######################################################################################################
}
