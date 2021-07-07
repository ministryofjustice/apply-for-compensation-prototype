module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/arms/skin', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (armsInjuredParts.includes('Tissue')) {
      res.redirect('/application/_5-injuries/injured-body-parts/arms/tissue')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/application/_5-injuries/infection/')
    }
  })
}
