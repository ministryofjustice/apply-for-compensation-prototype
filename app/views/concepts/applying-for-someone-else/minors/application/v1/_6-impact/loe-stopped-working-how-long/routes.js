module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-stopped-working-how-long', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-stopped-working-how-long/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
