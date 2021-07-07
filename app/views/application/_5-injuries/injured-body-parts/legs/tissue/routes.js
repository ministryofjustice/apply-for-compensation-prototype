module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_5-injuries/injured-body-parts/legs/tissue', function (req, res) {
      res.redirect('/application/_5-injuries/infection/')
  })
}
