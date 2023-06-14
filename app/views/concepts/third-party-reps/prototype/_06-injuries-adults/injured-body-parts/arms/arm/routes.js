module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/arm', function (req, res) {





      let armsInjuredParts = req.session.data['armsInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (armsInjuredParts.includes('Elbow')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/elbow')
      } else if (armsInjuredParts.includes('Wrist')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/wrist')
      } else if (armsInjuredParts.includes('Hand')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/hand')
      } else if (armsInjuredParts.includes('Finger and thumb')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/finger-thumb')
      } else if (armsInjuredParts.includes('Skin')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/skin')
      } else if (armsInjuredParts.includes('Tissue')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/tissue')
        // Go to new body part section
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/')
      }



  })
  // END__######################################################################################################
}
