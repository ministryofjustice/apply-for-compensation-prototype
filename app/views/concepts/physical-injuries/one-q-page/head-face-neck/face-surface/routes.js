module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/face-surface', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page/your-injuries')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/face-surface/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/face-surface/index', content)
  })
  // END__######################################################################################################
}
