module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/legs/injuries/foot', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (legInjuredParts.includes('Hip')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/legs/injuries/hip')
    } else if (legInjuredParts.includes('Knee')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/legs/injuries/knee')
    } else if (legInjuredParts.includes('Leg')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/legs/injuries/leg')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/legs/injuries/toes')
      // Go to body part section
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/torso/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/other-injuries-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/legs/injuries/foot/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v3/legs/injuries/foot/index', content)
  })
  // END__######################################################################################################
}
