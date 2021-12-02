module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/torso/tissue', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []

    if (injuredParts.includes('Arms or hands')) {
     res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/infection/')
    }
  })
}
