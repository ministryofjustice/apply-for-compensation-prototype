module.exports = function(router, content) {
  // START__####################################################################################################
  // File: GP Visited?

  router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-visited', function(req, res) {
    // Get the answer from the query string

    var visitedGP = req.session.data['visitedGP']
    var registeredGP = req.session.data['registeredGP']
    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    let injuredParts = req.session.data['injuredParts']

    // I am registered with a GP
    if (registeredGP === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-details')
      // I am not registered with a GP
    } else if (registeredGP === 'No') {
      // I did visit a GP
      if (visitedGP === 'Yes') {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-details')
        // I did NOT visit a GP
      } else if (visitedGP === 'No') {
        // I do have physical injuries
        if (havePhysicalInjuries === 'Yes') {
          if (injuredParts && injuredParts.includes('Head, face or neck')) {
          // My physical injuries included a Head, neck or Face injury
          res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-visited')
          } else {
            // My physical injuries DO NOT included a Head, neck or Face injury
            res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited/')
          }
          // I do NOT have physical injuries
        } else {
          res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited/')
        }
    }
  }
})

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-visited/', function(req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-minors/gp-visited/index', content)
  })


  // END__######################################################################################################
}
