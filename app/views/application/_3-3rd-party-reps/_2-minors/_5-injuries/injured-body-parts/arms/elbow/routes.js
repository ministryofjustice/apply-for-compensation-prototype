module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/elbow', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let armsInjuredParts = req.session.data['armsInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (armsInjuredParts.includes('Wrist')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/wrist')
      } else if (armsInjuredParts.includes('Hand')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/hand')
      } else if (armsInjuredParts.includes('Finger and thumb')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/finger-thumb')
      } else if (armsInjuredParts.includes('Skin')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/skin')
      } else if (armsInjuredParts.includes('Tissue')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/tissue')
        // Go to new body part section
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/')
      } else {
        res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/infection/')
      }

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
  // END__######################################################################################################
  }
