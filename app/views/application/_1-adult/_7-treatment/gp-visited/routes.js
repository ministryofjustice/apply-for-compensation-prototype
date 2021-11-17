module.exports = function(router, content) {
  // START__####################################################################################################
  // File: GP Visited?

  router.post('/application/_1-adult/_7-treatment/gp-visited', function(req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // Get the answer from the query string

      var visitedGP = req.session.data['visitedGP']
      var registeredGP = req.session.data['registeredGP']
      var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
      let injuredParts = req.session.data['injuredParts']

      // I am registered with a GP
      if (registeredGP === 'Yes') {
        res.redirect('/application/_1-adult/_7-treatment/gp-details')
        // I am not registered with a GP
      } else if (registeredGP === 'No') {
        // I did visit a GP
        if (visitedGP === 'Yes') {
          res.redirect('/application/_1-adult/_7-treatment/gp-details')
          // I did NOT visit a GP
        } else if (visitedGP === 'No') {
          // I do have physical injuries
          if (havePhysicalInjuries === 'Yes') {
            if (injuredParts && injuredParts.includes('Head, face or neck')) {
            // My physical injuries included a Head, neck or Face injury
            res.redirect('/application/_1-adult/_7-treatment/dentist-visited')
            } else {
              // My physical injuries DO NOT included a Head, neck or Face injury
              res.redirect('/application/_1-adult/_7-treatment/hospital-visited/')
            }
            // I do NOT have physical injuries
          } else {
            res.redirect('/application/_1-adult/_7-treatment/hospital-visited/')
          }
      }
    }
  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})

  // Pass the question in to the page
  router.get('/application/_1-adult/_7-treatment/gp-visited/', function(req, res) {
    res.render('application/_1-adult/_7-treatment/gp-visited/index', content)
  })


  // END__######################################################################################################
}
