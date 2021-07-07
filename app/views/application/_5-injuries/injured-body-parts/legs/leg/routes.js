module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/legs/leg', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (legInjuredParts.includes('Knee')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/knee')
    } else if (legInjuredParts.includes('Ankle')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/ankle')
    } else if (legInjuredParts.includes('Foot')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/foot')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/toes')
    } else if (legInjuredParts.includes('Skin')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/skin')
    } else if (legInjuredParts.includes('Tissue')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/tissue')
      // Go to body part section
    } else {
      res.redirect('/application/_5-injuries/infection/')
    }
  })
  // END__######################################################################################################
}
