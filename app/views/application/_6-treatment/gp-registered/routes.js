module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_6-treatment/gp-registered', function (req, res) {
  // Get the answer from the query string
  var registeredGP = req.session.data['registeredGP']
  let injuredParts = req.session.data['injuredParts']

  if (registeredGP === 'No') {

    if (injuredParts && injuredParts.includes('Head, face or neck')) {
      res.redirect('/application/_6-treatment/dentist-visited')
    } else {
      res.redirect('/application/_6-treatment/hospital-visited/')
    }

  } else if (registeredGP === 'Yes') {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_6-treatment/gp-visited')
  }
})

// Pass the question in to the page
router.get('/application/_6-treatment/gp-registered/', function (req, res) {
  res.render('application/_6-treatment/gp-registered/index', content)
})

// END__######################################################################################################
}
