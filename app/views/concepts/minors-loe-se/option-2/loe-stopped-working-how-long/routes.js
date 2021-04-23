module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-2/loe-stopped-working-how-long', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-2/se-context')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-2/loe-stopped-working-how-long/', function (req, res) {
    res.render('concepts/minors-loe-se/option-2/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
