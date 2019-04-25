module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/police-force-v4/incident-location', function (req, res) {

    // if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    //   return res.redirect('/application/check-your-answers-page')
    // }

  // Get the answer from the query string

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/concepts/police-force-v4/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/concepts/police-force-v4/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/concepts/police-force-v4/wales-location')
          }

          if (yourChoice === 'Somewhere else') {
            // Redirect to the relevant page
            res.redirect('/concepts/police-force-v4/somewhere-else')
          }

      })
  // Pass the question in to the page
  router.get('/concepts/police-force-v4/incident-location/', function (req, res) {
    res.render('concepts/police-force-v4/incident-location/index', content)
  })


  // END__######################################################################################################
}
