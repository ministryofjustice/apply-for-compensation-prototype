module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose', function (req, res) {

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose/index', content)
  })
  // END__######################################################################################################
}
