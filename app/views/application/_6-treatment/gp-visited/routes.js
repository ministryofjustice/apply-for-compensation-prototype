module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_6-treatment/gp-visited', function (req, res) {
  // Get the answer from the query string

  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']
  let injuredParts = req.session.data['injuredParts']

  if (visitedGP === 'No') {

    if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/application/_6-treatment/dentist-visited')
    } else {
      res.redirect('/application/_6-treatment/hospital-visited/')
    }

  } else if (visitedGP === 'Yes') {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_6-treatment/gp-details')
  }
})

// Pass the question in to the page
router.get('/application/_6-treatment/gp-visited/', function (req, res) {
  res.render('application/_6-treatment/gp-visited/index', content)
})


// END__######################################################################################################
}
