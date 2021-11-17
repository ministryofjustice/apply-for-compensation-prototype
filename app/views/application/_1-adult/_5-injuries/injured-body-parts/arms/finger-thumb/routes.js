module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_1-adult/_5-injuries/injured-body-parts/arms/finger-thumb', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let injuredParts = req.session.data['injuredParts'] || []
      let armsInjuredParts = req.session.data['armsInjuredParts'] || []

      if (armsInjuredParts.includes('Skin')) {
        res.redirect('/application/_1-adult/_5-injuries/injured-body-parts/arms/skin')
      } else if (armsInjuredParts.includes('Tissue')) {
        res.redirect('/application/_1-adult/_5-injuries/injured-body-parts/arms/tissue')
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/application/_1-adult/_5-injuries/injured-body-parts/legs/')
      } else {
        res.redirect('/application/_1-adult/_5-injuries/infection/')
      }

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
  // END__######################################################################################################
  }
