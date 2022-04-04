module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/skin', function (req, res) {





      let legInjuredParts = req.session.data['legInjuredParts'] || []

    if (legInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/injured-body-parts/legs/tissue')
    } else {
       res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/')
     }


  })
}
