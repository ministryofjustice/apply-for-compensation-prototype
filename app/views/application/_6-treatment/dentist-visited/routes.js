module.exports = function (router, content) {
// START__####################################################################################################
// File: Dentist visited?
// Variable: mentalHealth

router.post('/application/_6-treatment/dentist-visited', function (req, res) {
  // Get the answer from the query string

  var visitedDentist = req.session.data['visitedDentist']
  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if (visitedDentist === 'No') {
    if (visitedGP === 'No') {
      res.redirect('/application/_6-treatment/hospital-visited/')
    } else {
      res.redirect('/application/_7-financial-losses/context-your-money/')
    }
  } else if (visitedDentist === 'Yes') {
    res.redirect('/application/_6-treatment/dentist-details')
  }
})

// Pass the question in to the page
router.get('/application/_6-treatment/dentist-visited/', function (req, res) {
  res.render('application/_6-treatment/dentist-visited/index', content)
})


// END__######################################################################################################
}
