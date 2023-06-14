module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/application/_2-minors/_3-incident-details/incident-location', function (req, res) {

    // if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    //   return res.redirect('/application/_2-minors/_3-incident-details/_10-end/check-your-answers-page')
    // }

  // Get the answer from the query string

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/application/_2-minors/_3-incident-details/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/application/_2-minors/_3-incident-details/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/application/_2-minors/_3-incident-details/wales-location')
          }

          if (yourChoice === 'somewhere-else') {
            // Redirect to the relevant page
            res.redirect('/application/_2-minors/_3-incident-details/somewhere-else')
          }

      })
  // Pass the question in to the page
  router.get('/application/_2-minors/_3-incident-details/incident-location/', function (req, res) {
    res.render('application/_2-minors/_3-incident-details/incident-location/index', content)
  })

  router.get('/application/_2-minors/_3-incident-details/incident-location/error', function (req, res) {
    res.render('application/_2-minors/_3-incident-details/incident-location/error', content)
  })
  // END__######################################################################################################
}
