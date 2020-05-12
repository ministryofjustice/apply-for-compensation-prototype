module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing', function (req, res) {

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing/index', content)
  })
  // END__######################################################################################################
}
