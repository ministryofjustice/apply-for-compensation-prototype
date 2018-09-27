module.exports = function (router) {



  // START__####################################################################################################
  // File: single-or-multiple-incidents
  // Variable: single-or-multiple-incidents
  router.post('/application/single-or-multiple-incidents', function (req, res) {
    // Get the answer from the query string
    var singleOrMultipleIncidents = req.session.data['single-or-multiple-incidents']

    if (singleOrMultipleIncidents === 'Over a period of time') {
      // Redirect to the relevant page
      req.session.data['incident-date-day'] = null; // this line is here to clear the data if the user had chosen a single incident initially because I use that session as a test in the code for POST crime-reported-date

      res.redirect('/application/period-of-abuse-start')
    } else {
      req.session.data['period-of-abuse-end-month'] = null; // this line is here to clear the data if the user had chosen a period of abuse initially because I use that session as a test in the code for POST crime-reported-date
      // else we're under 2 days
      res.redirect('/application/incident-date')
    }
  })

  // Add content key/value pairs here
  const content = {
    singleOrMultipleIncidentsQuestion: 'Did the crime happen once or over a period of time?',
    itemOneValue: 'Once',
    itemTwoValue: 'Over a period of time',
    errorMessageContent: 'Select Once or Over a period of time',
    errorMessageTitle: 'There is a problem'
  };

  // Pass the question in to the page
  router.get('/application/single-or-multiple-incidents/', function (req, res) {
    res.render('application/single-or-multiple-incidents/index', content)
  })

  // Pass the question in to the page
  router.get('/application/single-or-multiple-incidents/error', function (req, res) {
    res.render('application/single-or-multiple-incidents/error', content)
  })
  // END__######################################################################################################
}
