module.exports = function (router, content) {
  // START__####################################################################################################
  // Variable: criminalConvictions

  router.post('/application/_3-3rd-party-reps/_2-minors/_7-treatment/context-treatment', function (req, res) {
    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    var haveInfection = req.session.data['haveInfection']
    var pregnancy = req.session.data['pregnancy']
    var pregnancyLoss = req.session.data['pregnancyLoss']
    var dmiDoYouHave = req.session.data['dmiDoYouHave']

    if ((havePhysicalInjuries === 'Yes') || (haveInfection === 'Yes') || (pregnancy === 'Yes') || (pregnancyLoss === 'Yes') ) {
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_7-treatment/treatment-details')
    } else if (dmiDoYouHave === 'Yes') {
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_7-treatment/dmi-treatment-types')
    } else {
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_7-treatment/gp-registered')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_7-treatment/context-treatment/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_7-treatment/context-treatment/index', content)
  })
  // END__######################################################################################################
}
