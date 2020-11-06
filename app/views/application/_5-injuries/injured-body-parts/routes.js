module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []

    if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/application/_5-injuries/injured-body-parts/head-face-neck')
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/application/_5-injuries/injured-body-parts/torso/')
    } else if (injuredParts.includes('Arms or hands')) {
     res.redirect('/application/_5-injuries/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/application/_5-injuries/injured-body-parts/legs/')
    }
  })

  // END__######################################################################################################
}
