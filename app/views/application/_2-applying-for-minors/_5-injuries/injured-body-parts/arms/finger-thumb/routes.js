module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-applying-for-minors/_5-injuries/injured-body-parts/arms/finger-thumb', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []

    if (armsInjuredParts.includes('Skin')) {
      res.redirect('/application/_2-applying-for-minors/_5-injuries/injured-body-parts/arms/skin')
    } else if (armsInjuredParts.includes('Tissue')) {
      res.redirect('/application/_2-applying-for-minors/_5-injuries/injured-body-parts/arms/tissue')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/application/_2-applying-for-minors/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/application/_2-applying-for-minors/_5-injuries/infection/')
    }
  })
  // END__######################################################################################################
  }
