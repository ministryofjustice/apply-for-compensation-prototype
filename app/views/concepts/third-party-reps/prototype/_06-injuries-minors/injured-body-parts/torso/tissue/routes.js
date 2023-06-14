module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/torso/tissue', function (req, res) {





      let injuredParts = req.session.data['injuredParts'] || []

      if (injuredParts.includes('Arms or hands')) {
       res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/arms/')
      } else if (injuredParts.includes('Legs or feet')) {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts/legs/')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/infection/')
      }


  })
}
