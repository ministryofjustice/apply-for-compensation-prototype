module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/skin', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (torsoInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/tissue')
    } else if (injuredParts.includes('Arms or hands')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/')
    }
  })
}
