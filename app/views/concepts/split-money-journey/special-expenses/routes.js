module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/special-expenses', function (req, res) {
    res.redirect('/concepts/end')
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/special-expenses/', function (req, res) {
    res.render('concepts/split-money-journey/special-expenses/index', content)
  })
  // END__######################################################################################################
}
