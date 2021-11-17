module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/application/_1-adult/_3-incident-details/incident-location', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/application/_1-adult/_3-incident-details/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/application/_1-adult/_3-incident-details/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/application/_1-adult/_3-incident-details/wales-location')
          }

          if (yourChoice === 'somewhere-else') {
            // Redirect to the relevant page
            res.redirect('/application/_1-adult/_3-incident-details/somewhere-else')
          }

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
    })
  // Pass the question in to the page
  router.get('/application/_1-adult/_3-incident-details/incident-location/', function (req, res) {
    res.render('application/_1-adult/_3-incident-details/incident-location/index', content)
  })

  router.get('/application/_1-adult/_3-incident-details/incident-location/error', function (req, res) {
    res.render('application/_1-adult/_3-incident-details/incident-location/error', content)
  })
  // END__######################################################################################################
}
