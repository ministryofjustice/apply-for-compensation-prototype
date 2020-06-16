module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/ear-hearing', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['headFaceNeckInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (headFaceNeckInjuredParts.includes('Nose')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/nose/')
    } else if (headFaceNeckInjuredParts.includes('Teeth')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/teeth/')
    } else if (headFaceNeckInjuredParts.includes('Tongue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/tongue/')
    } else if (injuredParts.includes('Torso')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/')
    } else if (injuredParts.includes('Arms or hands')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/your-injuries/')
    }
  })
}
