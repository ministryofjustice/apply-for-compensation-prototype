module.exports = function (router, content) {
  // START__####################################################################################################
  // File: transition

  router.post('/concepts/timeout/timed-out', function (req, res) {
    res.redirect('/start-page')
  })

  // Pass the question in to the page
  router.get('/concepts/timeout/timed-out', function (req, res) {
    res.render('concepts/timeout/timed-out/index', content)
  })

  // END__######################################################################################################
}
