module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/arms/tissue', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (injuredParts.includes('Legs or feet')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/application/_5-injuries/infection/')
    }
  })
}
