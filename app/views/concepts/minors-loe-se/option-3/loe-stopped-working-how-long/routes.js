module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-3/loe-stopped-working-how-long', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-3/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-3/loe-stopped-working-how-long/', function (req, res) {
    res.render('concepts/minors-loe-se/option-3/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
