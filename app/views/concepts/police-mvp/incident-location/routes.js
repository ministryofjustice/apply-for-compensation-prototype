module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/police-mvp/incident-location', function (req, res) {

    // Get the answer from the query string

    var yourChoice = req.session.data['where-do-you-live']

    if (yourChoice === 'england') {
      // Redirect to the relevant page
      res.redirect('/concepts/police-mvp/england-location')
    }
      if (yourChoice === 'scotland') {
        // Redirect to the relevant page
        res.redirect('/concepts/police-mvp/scotland-location')
      }
        if (yourChoice === 'wales') {
          // Redirect to the relevant page
          res.redirect('/concepts/police-mvp/wales-location')
        }
          if (yourChoice === 'else') {
            // Redirect to the relevant page
            res.redirect('/concepts/police-mvp/else-location')
}
  })

  // Pass the question in to the page
  router.get('/concepts/police-mvp/incident-location/', function (req, res) {
    res.render('concepts/police-mvp/incident-location/index', content)
  })
  // END__######################################################################################################
}
