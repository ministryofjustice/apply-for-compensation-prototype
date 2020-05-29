module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/torso/injuries/shoulder-blade', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []

    if (torsoInjuredParts.includes('Tail bone')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/torso/injuries/tail-bone')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/other-injuries-details')
    }  })
  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/torso/injuries/shoulder-blade/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v3/torso/injuries/shoulder-blade/index', content)
  })
  // END__######################################################################################################
}
