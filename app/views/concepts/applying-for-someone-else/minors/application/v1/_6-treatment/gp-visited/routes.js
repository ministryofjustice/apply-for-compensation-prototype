module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-visited', function (req, res) {
  // Get the answer from the query string

  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']
  let injuredParts = req.session.data['injuredParts']

  if (visitedGP === 'No') {

    if (registeredGP === 'Yes') {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-details')

    } else if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-visited')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-visited/')
    }

  } else if (visitedGP === 'Yes') {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-details')
  }
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-visited/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-visited/index', content)
})


// END__######################################################################################################
}
