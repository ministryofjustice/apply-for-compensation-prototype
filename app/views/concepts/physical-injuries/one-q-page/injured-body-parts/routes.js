module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/injured-body-parts', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page/legs')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/injured-body-parts/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/injured-body-parts/index', content)
  })
  // END__######################################################################################################
}
