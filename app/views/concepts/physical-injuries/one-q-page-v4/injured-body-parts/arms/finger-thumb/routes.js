module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/finger-thumb', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []

    if (armsInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/skin')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/your-injuries/')
    }
  })
  // END__######################################################################################################
  }
