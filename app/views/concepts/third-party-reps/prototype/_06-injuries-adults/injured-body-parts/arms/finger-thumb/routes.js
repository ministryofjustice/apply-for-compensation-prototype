module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/finger-thumb', function (req, res) {





      let injuredParts = req.session.data['injuredParts'] || []
      let armsInjuredParts = req.session.data['armsInjuredParts'] || []

      if (armsInjuredParts.includes('Skin')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/skin')
      } else if (armsInjuredParts.includes('Tissue')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/tissue')
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/')
      }



  })
  // END__######################################################################################################
  }
