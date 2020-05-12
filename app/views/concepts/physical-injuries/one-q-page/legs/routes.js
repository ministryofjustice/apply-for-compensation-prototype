module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/injured-parts/legs', function (req, res) {

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/legs/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/legs/index', content)
  })
  // END__######################################################################################################
}
