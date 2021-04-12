module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/context-loss-of-earnings', function (req, res) {
    res.redirect('/concepts/split-money-journey/loe-working-situation')
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/context-loss-of-earnings/', function (req, res) {
    res.render('concepts/split-money-journey/context-loss-of-earnings/index', content)
  })
  // END__######################################################################################################
}
