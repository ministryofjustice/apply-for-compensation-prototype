module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-affected-daily-life', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/se-context')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-affected-daily-life/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-se-affected-daily-life/index', content)
  })
  // END__######################################################################################################
}
