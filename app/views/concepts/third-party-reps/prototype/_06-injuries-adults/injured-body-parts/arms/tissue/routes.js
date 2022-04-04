module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/arms/tissue', function (req, res) {





      let headFaceNeckInjuredParts = req.session.data['armsInjuredParts'] || []
      let injuredParts = req.session.data['injuredParts'] || []

      if (injuredParts.includes('Legs or feet')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/')
      }


  })
}
