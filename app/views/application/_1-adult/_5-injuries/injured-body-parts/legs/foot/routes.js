module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_1-adult/_5-injuries/injured-body-parts/legs/foot', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let legInjuredParts = req.session.data['legInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (legInjuredParts.includes('Toes')) {
        res.redirect('/application/_1-adult/_5-injuries/injured-body-parts/legs/toes')
      } else if (legInjuredParts.includes('Skin')) {
        res.redirect('/application/_1-adult/_5-injuries/injured-body-parts/legs/skin')
      } else if (legInjuredParts.includes('Tissue')) {
        res.redirect('/application/_1-adult/_5-injuries/injured-body-parts/legs/tissue')
        // Go to body part section
      } else {
        res.redirect('/application/_1-adult/_5-injuries/infection/')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
  // END__######################################################################################################
}
