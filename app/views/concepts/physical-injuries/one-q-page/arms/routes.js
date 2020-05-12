module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/injured-parts/arms', function (req, res) {

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/arms/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/arms/index', content)
  })
  // END__######################################################################################################
}
