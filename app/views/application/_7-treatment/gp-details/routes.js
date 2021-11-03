module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/application/_7-treatment/gp-details', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      var visitedGP = req.session.data['visitedGP']
      let injuredParts = req.session.data['injuredParts']

      // My physical injuries included a Head, neck or Face injury
      if (injuredParts && injuredParts.includes('Head, face or neck')) {
        res.redirect('/application/_7-treatment/dentist-visited')
      } else {
        // I did NOT visit a GP
        if (visitedGP === 'No') {
          // So ask who I did see
          res.redirect('/application/_7-treatment/hospital-visited/')
        } else {
          // If I did visit a GP take me to the next secyion
          res.redirect('/application/_6-impact/loe-context/')
        }
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_7-treatment/gp-details/', function (req, res) {
    res.render('application/_7-treatment/gp-details/index', content)
  })

  // END__######################################################################################################
}
