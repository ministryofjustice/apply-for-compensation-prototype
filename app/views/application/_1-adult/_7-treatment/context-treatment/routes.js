module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Context Treatment

  router.post('/application/_1-adult/_7-treatment/context-treatment', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
      var haveInfection = req.session.data['haveInfection']
      var pregnancy = req.session.data['pregnancy']
      var pregnancyLoss = req.session.data['pregnancyLoss']
      var dmiDoYouHave = req.session.data['dmiDoYouHave']

      if ((havePhysicalInjuries === 'Yes') || (haveInfection === 'Yes') || (pregnancy === 'Yes') || (pregnancyLoss === 'Yes') ) {
        res.redirect('/application/_1-adult/_7-treatment/treatment-details')
      } else if (dmiDoYouHave === 'Yes') {
        res.redirect('/application/_1-adult/_7-treatment/dmi-treatment-types')
      } else {
        res.redirect('/application/_1-adult/_7-treatment/gp-registered')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_7-treatment/context-treatment/', function (req, res) {
    res.render('application/_1-adult/_7-treatment/context-treatment/index', content)
  })
  // END__######################################################################################################
}
