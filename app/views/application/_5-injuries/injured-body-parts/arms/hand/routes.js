module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/arms/hand', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      let armsInjuredParts = req.session.data['armsInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (armsInjuredParts.includes('Finger and thumb')) {
        res.redirect('/application/_5-injuries/injured-body-parts/arms/finger-thumb')
      } else if (armsInjuredParts.includes('Skin')) {
        res.redirect('/application/_5-injuries/injured-body-parts/arms/skin')
      } else if (armsInjuredParts.includes('Tissue')) {
        res.redirect('/application/_5-injuries/injured-body-parts/arms/tissue')
        // Go to new body part section
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/application/_5-injuries/injured-body-parts/legs/')
      } else {
        res.redirect('/application/_5-injuries/infection/')
      }

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })
  // END__######################################################################################################
}
