module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/tissue', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let headFaceNeckInjuredParts = req.session.data['armsInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (injuredParts.includes('Legs or feet')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/')
      } else {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/infection/')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
}
