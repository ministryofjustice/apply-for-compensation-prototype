module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (injuredParts.includes('Torso, back or abdomen')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/torso/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/your-injuries')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/legs/injuries/toes/index', content)
  })
  // END__######################################################################################################
}
