module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/legs/toes', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []

    if (legInjuredParts.includes('Skin')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/skin')
    } else if (legInjuredParts.includes('Tissue')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/tissue')
    } else {
      res.redirect('/application/_5-injuries/context-about-dmi/')
    }
  })
}
