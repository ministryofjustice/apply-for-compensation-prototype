module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/legs/injuries/foot', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (legInjuredParts.includes('Hip')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/hip')
    } else if (legInjuredParts.includes('Knee')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/knee')
    } else if (legInjuredParts.includes('Leg')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/leg')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes')
      // Go to body part section
    } else if (injuredParts.includes('Torso, back or abdomen')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/torso/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/your-injuries')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/legs/injuries/foot/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/legs/injuries/foot/index', content)
  })
  // END__######################################################################################################
}
