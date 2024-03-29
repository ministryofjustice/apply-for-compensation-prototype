module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/skin', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let legInjuredParts = req.session.data['legInjuredParts'] || []

    if (legInjuredParts.includes('Tissue')) {
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/tissue')
    } else {
       res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/infection/')
     }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
}
