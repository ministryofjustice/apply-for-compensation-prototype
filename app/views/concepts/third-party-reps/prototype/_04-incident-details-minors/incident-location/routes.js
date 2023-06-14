module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-location', function (req, res) {

    // if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    //   return res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/_11-end-minors/check-your-answers-page')
    // }

  // Get the answer from the query string

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/wales-location')
          }

          if (yourChoice === 'somewhere-else') {
            // Redirect to the relevant page
            res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/somewhere-else')
          }

      })
  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-location/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/incident-location/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/incident-location/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/incident-location/error', content)
  })
  // END__######################################################################################################
}
