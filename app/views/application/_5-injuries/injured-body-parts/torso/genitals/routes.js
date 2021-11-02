module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/torso/genitals', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      let injuredParts = req.session.data['injuredParts'] || []
      let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []

      if (torsoInjuredParts.includes('Skin')) {
       res.redirect('/application/_5-injuries/injured-body-parts/torso/skin')
      } else if (torsoInjuredParts.includes('Tissue')) {
        res.redirect('/application/_5-injuries/injured-body-parts/torso/tissue')
      } else if (injuredParts.includes('Arms or hands')) {
        res.redirect('/application/_5-injuries/injured-body-parts/arms/')
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
