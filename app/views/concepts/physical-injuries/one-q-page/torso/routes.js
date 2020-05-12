module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/injured-parts/torso', function (req, res) {

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/torsos/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/torso/index', content)
  })
  // END__######################################################################################################
}
