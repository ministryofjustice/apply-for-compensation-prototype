module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/ankle', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if(legInjuredParts.includes('Foot')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/foot')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/toes')
      // Go to body part section
    } else if (legInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/skin')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/your-injuries/')
    }
  })
  // END__######################################################################################################
}
