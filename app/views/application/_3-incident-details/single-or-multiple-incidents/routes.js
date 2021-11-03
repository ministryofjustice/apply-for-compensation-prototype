module.exports = function (router, content) {

  // START__####################################################################################################
  // File: single-or-multiple-incidents
  // Variable: single-or-multiple-incidents
  router.post('/application/_3-incident-details/single-or-multiple-incidents', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // Get the answer from the query string
      var singleOrMultipleIncidents = req.session.data['single-or-multiple-incidents']

      if (singleOrMultipleIncidents === 'Over a period of time') {
        // Redirect to the relevant page
        req.session.data['incident-date-day'] = null; // this line is here to clear the data if the user had chosen a single incident initially because I use that session as a test in the code for POST crime-reported-date

        res.redirect('/application/_3-incident-details/period-of-abuse-start')
      } else {
        req.session.data['period-of-abuse-end-month'] = null; // this line is here to clear the data if the user had chosen a period of abuse initially because I use that session as a test in the code for POST crime-reported-date
        // else we're under 2 days
        res.redirect('/application/_3-incident-details/incident-date')
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/single-or-multiple-incidents/', function (req, res) {
    res.render('application/_3-incident-details/single-or-multiple-incidents/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/single-or-multiple-incidents/error', function (req, res) {
    res.render('application/_3-incident-details/single-or-multiple-incidents/error', content)
  })
  // END__######################################################################################################
}
