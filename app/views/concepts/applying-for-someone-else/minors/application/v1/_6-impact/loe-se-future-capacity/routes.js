module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-future-capacity', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-affected-daily-life')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-future-capacity/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-future-capacity/index', content)
  })
  // END__######################################################################################################
}
