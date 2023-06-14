module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/neck', function (req, res) {





      let headFaceNeckInjuredParts = req.session.data['headFaceNeckInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (headFaceNeckInjuredParts.includes('Skin')) {
       res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/skin/')
     } else if (headFaceNeckInjuredParts.includes('Tissue')) {
       res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/head-face-neck/tissue/')
      } else if (injuredParts.includes('Torso')) {
       res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/torso/')
      } else if (injuredParts.includes('Arms or hands')) {
       res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/')
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/')
      }


  })
}
