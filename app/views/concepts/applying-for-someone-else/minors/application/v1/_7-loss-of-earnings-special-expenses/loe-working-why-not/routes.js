module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-why-not', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-why-not/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-why-not/index', content)
  })
  // END__######################################################################################################
}
