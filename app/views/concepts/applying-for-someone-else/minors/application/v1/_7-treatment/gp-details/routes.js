module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    let injuredParts = req.session.data['injuredParts']

    // My physical injuries included a Head, neck or Face injury
    if (injuredParts && injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/dentist-visited')
    } else {
      // I did NOT visit a GP
      if (visitedGP === 'No') {
        // So ask who I did see
        res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/hospital-visited/')
      } else {
        // If I did visit a GP take me to the next secyion
        res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/context-prev-compensation/')
      }
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-details/index', content)
  })

  // END__######################################################################################################
}
