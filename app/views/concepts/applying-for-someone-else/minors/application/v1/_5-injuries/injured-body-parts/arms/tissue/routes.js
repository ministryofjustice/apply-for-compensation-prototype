module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/tissue', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/')
    }
  })
}
