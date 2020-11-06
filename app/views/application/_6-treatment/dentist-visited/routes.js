module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_6-treatment/dentist-visited', function (req, res) {
  // Get the answer from the query string

  var visitedDentist = req.session.data['visitedDentist']
  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if (visitedDentist === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/application/_6-treatment/dentist-details')
  } else {

    if ((registeredGP === 'No') && (visitedGP === 'No')) {
      res.redirect('/application/_6-treatment/hospital-visited/')
    } else {
      res.redirect('/application/_6-treatment/context-your-money/')
    }
  }
})

// Pass the question in to the page
router.get('/application/_6-treatment/dentist-visited/', function (req, res) {
  res.render('application/_6-treatment/dentist-visited/index', content)
})


// END__######################################################################################################
}
