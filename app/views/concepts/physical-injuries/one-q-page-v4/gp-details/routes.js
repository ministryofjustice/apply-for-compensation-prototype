module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/physical-injuries/one-q-page-v4/gp-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    let injuredParts = req.session.data['injuredParts']

    // My physical injuries included a Head, neck or Face injury
    if (injuredParts && injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dentist-visited')
    } else {
      // I did NOT visit a GP
      if (visitedGP === 'No') {
        // So ask who I did see
        res.redirect('/concepts/physical-injuries/one-q-page-v4/hospital-visited/')
      } else {
        // If I did visit a GP take me to the next secyion
        res.redirect('/concepts/physical-injuries/one-q-page-v4/context-your-money/')
      }
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/gp-details/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/gp-details/index', content)
  })

  // END__######################################################################################################
}
