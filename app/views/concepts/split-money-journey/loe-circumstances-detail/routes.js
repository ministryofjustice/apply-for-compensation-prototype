module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/loe-circumstances-detail', function (req, res) {
    res.redirect('/concepts/split-money-journey/context-special-expenses')
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/loe-circumstances-detail/', function (req, res) {
    res.render('concepts/split-money-journey/loe-circumstances-detail/index', content)
  })
  // END__######################################################################################################
}
