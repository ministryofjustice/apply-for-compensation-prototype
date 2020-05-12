module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/burns', function (req, res) {
    let headNeckFaceSurface = req.session.data['headNeckFaceSurface'] || []

    // If they pick apple or banana then show them the success page
    if (headNeckFaceSurface.includes('Scarring')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/scarring')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/burns/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/burns/index', content)
  })
  // END__######################################################################################################
}
