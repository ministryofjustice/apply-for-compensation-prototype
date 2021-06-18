module.exports = function (router, content) {
  // START__####################################################################################################
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/context-treatment', function (req, res) {
    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    var haveInfection = req.session.data['haveInfection']
    var pregnancy = req.session.data['pregnancy']
    var pregnancyLoss = req.session.data['pregnancyLoss']
    var dmiDoYouHave = req.session.data['dmiDoYouHave']

    if ((havePhysicalInjuries === 'Yes') || (haveInfection === 'Yes') || (pregnancy === 'Yes') || (pregnancyLoss === 'Yes') ) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/treatment-details')
    } else if (dmiDoYouHave === 'Yes') {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/dmi-treatment-types')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-registered')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/context-treatment/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-treatment/context-treatment/index', content)
  })
  // END__######################################################################################################
}
