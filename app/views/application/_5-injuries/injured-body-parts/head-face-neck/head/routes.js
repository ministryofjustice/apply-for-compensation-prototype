module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/head-face-neck/head', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['headFaceNeckInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (headFaceNeckInjuredParts.includes('Face or jaw')) {
      res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/face/')
    } else if (headFaceNeckInjuredParts.includes('Eye or eyesight')) {
      res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/eye-sight/')
    } else if (headFaceNeckInjuredParts.includes('Ear or hearing')) {
     res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/')
    } else if (headFaceNeckInjuredParts.includes('Nose')) {
      res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/nose/')
    } else if (headFaceNeckInjuredParts.includes('Mouth')) {
      res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/mouth/')
    } else if (headFaceNeckInjuredParts.includes('Neck')) {
      res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck/neck/')
    } else if (headFaceNeckInjuredParts.includes('Skin')) {
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
