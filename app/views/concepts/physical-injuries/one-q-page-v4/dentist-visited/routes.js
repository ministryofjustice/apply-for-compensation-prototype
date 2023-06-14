module.exports = function (router, content) {
// START__####################################################################################################
// File: Dentist visited?
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v4/dentist-visited', function (req, res) {
  // Get the answer from the query string

  var visitedDentist = req.session.data['visitedDentist']
  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if (visitedDentist === 'No') {
    if (visitedGP === 'No') {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/hospital-visited/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-your-money/')
    }
  } else if (visitedDentist === 'Yes') {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/dentist-details')
  }
})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/dentist-visited/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/dentist-visited/index', content)
})


// END__######################################################################################################
}
