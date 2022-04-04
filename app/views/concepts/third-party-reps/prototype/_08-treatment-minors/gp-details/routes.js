module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    let injuredParts = req.session.data['injuredParts']

    // My physical injuries included a Head, neck or Face injury
    if (injuredParts && injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-visited')
    } else {
      // I did NOT visit a GP
      if (visitedGP === 'No') {
        // So ask who I did see
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited/')
      } else {
        // If I did visit a GP take me to the next secyion
        res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation/')
      }
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-minors/gp-details/index', content)
  })

  // END__######################################################################################################
}
