module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-minors/_5-injuries/injured-body-parts/legs/skin', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []

  if (legInjuredParts.includes('Tissue')) {
    res.redirect('/application/_2-minors/_5-injuries/injured-body-parts/legs/tissue')
  } else {
     res.redirect('/application/_2-minors/_5-injuries/infection/')
  }
})
}
