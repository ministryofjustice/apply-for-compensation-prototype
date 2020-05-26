module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/non-specific', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v2/injured-body-parts')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/non-specific/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/non-specific/index', content)
  })
  // END__######################################################################################################
}
