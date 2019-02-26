module.exports = function (router, content) {
  // START__####################################################################################################
  // File: transition

  router.post('/concepts/guidance', function (req, res) {
    res.redirect('/start-page')
  })

  // Pass the question in to the page
  router.get('/concepts/guidance', function (req, res) {
    res.render('concepts/guidance/index', content)
  })

  // END__######################################################################################################
}
