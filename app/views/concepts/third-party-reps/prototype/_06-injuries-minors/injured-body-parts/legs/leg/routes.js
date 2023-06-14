module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/leg', function (req, res) {





      let legInjuredParts = req.session.data['legInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (legInjuredParts.includes('Knee')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/knee')
      } else if (legInjuredParts.includes('Ankle')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/ankle')
      } else if (legInjuredParts.includes('Foot')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/foot')
      } else if (legInjuredParts.includes('Toes')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/toes')
      } else if (legInjuredParts.includes('Skin')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/skin')
      } else if (legInjuredParts.includes('Tissue')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/tissue')
        // Go to body part section
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/infection/')
      }


  })
  // END__######################################################################################################
}
