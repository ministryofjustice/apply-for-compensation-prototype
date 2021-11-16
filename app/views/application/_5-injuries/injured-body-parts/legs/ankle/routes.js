module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/legs/ankle', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      let legInjuredParts = req.session.data['legInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if(legInjuredParts.includes('Foot')) {
        res.redirect('/application/_5-injuries/injured-body-parts/legs/foot')
      } else if (legInjuredParts.includes('Toes')) {
        res.redirect('/application/_5-injuries/injured-body-parts/legs/toes')
      } else if (legInjuredParts.includes('Skin')) {
        res.redirect('/application/_5-injuries/injured-body-parts/legs/skin')
      } else if (legInjuredParts.includes('Tissue')) {
        res.redirect('/application/_5-injuries/injured-body-parts/legs/tissue')
      } else {
        res.redirect('/application/_5-injuries/infection/')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })
  // END__######################################################################################################
}
