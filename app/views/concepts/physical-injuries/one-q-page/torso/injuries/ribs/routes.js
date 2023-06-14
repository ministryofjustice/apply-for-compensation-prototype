module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/torso/injuries/ribs', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []

    // If they pick apple or banana then show them the success page
    if (torsoInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/shoulder-blade')
    } else if (torsoInjuredParts.includes('Tail bone')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/tail-bone')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/surface')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/torso/injuries/ribs/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/torso/injuries/ribs/index', content)
  })
  // END__######################################################################################################
}
