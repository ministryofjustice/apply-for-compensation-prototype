module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/police-force/incident-location', function (req, res) {

    // Get the answer from the query string

    var yourChoice = req.session.data['where-do-you-live']

    if (yourChoice === 'england') {
      // Redirect to the relevant page
      res.redirect('/concepts/police-force/england-location')
    }
      if (yourChoice === 'scotland') {
        // Redirect to the relevant page
        res.redirect('/concepts/police-force/scotland-location')
      }
        if (yourChoice === 'wales') {
          // Redirect to the relevant page
          res.redirect('/concepts/police-force/wales-location')
        }

        if (yourChoice === 'somewhere-else') {
          // Redirect to the relevant page
          res.redirect('/concepts/police-force/somewhere-else')
        }

  })

  // Pass the question in to the page
  router.get('/concepts/police-force/incident-location/', function (req, res) {
    res.render('concepts/police-force/incident-location/index', content)
  })
  // END__######################################################################################################
}
