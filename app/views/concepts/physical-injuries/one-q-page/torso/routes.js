module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/torso', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []

    // If they pick apple or banana then show them the success page
    if (torsoInjuredParts.includes('Abdomen')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/abdomen')
    } else if (torsoInjuredParts.includes('Back')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/back')
    } else if (torsoInjuredParts.includes('Breast bone')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/breast-bone')
    } else if (torsoInjuredParts.includes('Chest')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/chest')
    } else if (torsoInjuredParts.includes('Collar bone')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/collar-bone')
    } else if (torsoInjuredParts.includes('Genitals')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/genitals')
    } else if (torsoInjuredParts.includes('Internal organs')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/internal-organs')
    } else if (torsoInjuredParts.includes('Ribs')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/ribs')
    } else if (torsoInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/shoulder-blade')
    } else if (torsoInjuredParts.includes('Tail bone')) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/tail-bone')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/surface')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/torso/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/torso/index', content)
  })
  // END__######################################################################################################
}
