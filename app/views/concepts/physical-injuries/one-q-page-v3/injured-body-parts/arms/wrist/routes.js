module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/wrist', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/')
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries/')
    }
  })
  // END__######################################################################################################
}
