module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-minors/_5-injuries/injured-body-parts/torso/shoulder', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (torsoInjuredParts.includes('Chest')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/chest')
      } else if (torsoInjuredParts.includes('Abdomen')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/abdomen')
      } else if (torsoInjuredParts.includes('Back')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/back')
      } else if (torsoInjuredParts.includes('Pelvis')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/pelvis')
      } else if (torsoInjuredParts.includes('Genitals')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/genitals')
      } else if (torsoInjuredParts.includes('Skin')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/skin')
      } else if (torsoInjuredParts.includes('Tissue')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/torso/tissue')
      } else if (injuredParts.includes('Arms or hands')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/arms/')
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/legs/')
      } else {
        res.redirect('/application/_2-minors/_5-injuries/infection/')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
  // END__######################################################################################################
}
