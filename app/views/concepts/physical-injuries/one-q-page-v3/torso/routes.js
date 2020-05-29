module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/torso', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/torso/injuries/surface')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/torso/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v3/torso/index', content)
  })
  // END__######################################################################################################
}
