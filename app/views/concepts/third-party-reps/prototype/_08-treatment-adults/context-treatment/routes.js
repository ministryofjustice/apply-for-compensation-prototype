module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Context Treatment

  router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/context-treatment', function (req, res) {





      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
      var haveInfection = req.session.data['haveInfection']
      var pregnancy = req.session.data['pregnancy']
      var pregnancyLoss = req.session.data['pregnancyLoss']
      var dmiDoYouHave = req.session.data['dmiDoYouHave']

      if ((havePhysicalInjuries === 'Yes') || (haveInfection === 'Yes') || (pregnancy === 'Yes') || (pregnancyLoss === 'Yes') ) {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/treatment-details')
      } else if (dmiDoYouHave === 'Yes') {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/dmi-treatment-types')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/gp-registered')
      }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-adults/context-treatment/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-adults/context-treatment/index', content)
  })
  // END__######################################################################################################
}
