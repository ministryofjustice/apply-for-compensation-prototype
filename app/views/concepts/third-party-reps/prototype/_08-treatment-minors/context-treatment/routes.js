module.exports = function (router, content) {
  // START__####################################################################################################
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/context-treatment', function (req, res) {
    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    var haveInfection = req.session.data['haveInfection']
    var pregnancy = req.session.data['pregnancy']
    var pregnancyLoss = req.session.data['pregnancyLoss']
    var dmiDoYouHave = req.session.data['dmiDoYouHave']

    if ((havePhysicalInjuries === 'Yes') || (haveInfection === 'Yes') || (pregnancy === 'Yes') || (pregnancyLoss === 'Yes') ) {
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/treatment-details')
    } else if (dmiDoYouHave === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/dmi-treatment-types')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-registered')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/context-treatment/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-minors/context-treatment/index', content)
  })
  // END__######################################################################################################
}
