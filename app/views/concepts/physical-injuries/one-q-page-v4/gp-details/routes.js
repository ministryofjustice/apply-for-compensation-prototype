module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/physical-injuries/one-q-page-v4/gp-details', function (req, res) {

    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    var haveDMI = req.session.data['dmiDoYouHave']
    let injuredParts = req.session.data['injuredParts']

    if ((havePhysicalInjuries === 'No') && (haveDMI === 'Yes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dmi-treatment-types/')
    } else if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dentist-visited')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment-details/')
    }

  })



  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/gp-details/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/gp-details/index', content)
  })

  // END__######################################################################################################
}
