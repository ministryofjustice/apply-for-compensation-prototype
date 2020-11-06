module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/head-face-neck/neck', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['headFaceNeckInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (headFaceNeckInjuredParts.includes('Skin')) {
     res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/skin/')
   } else if (headFaceNeckInjuredParts.includes('Tissue')) {
     res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/tissue/')
    } else if (injuredParts.includes('Torso')) {
     res.redirect('/application/_5-injuries/injured-body-parts/torso/')
    } else if (injuredParts.includes('Arms or hands')) {
     res.redirect('/application/_5-injuries/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/application/_5-injuries/context-about-dmi/')
    }
  })
}
