module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location', function (req, res) {

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/wales-location')
          }

          if (yourChoice === 'somewhere-else') {
            // Redirect to the relevant page
            res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/somewhere-else')
          }

    })
    
  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/incident-location/error', content)
  })
  // END__######################################################################################################
}
