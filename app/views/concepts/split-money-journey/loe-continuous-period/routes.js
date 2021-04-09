module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/loe-continuous-period', function (req, res) {
    res.redirect('/concepts/split-money-journey/loe-briefly-describe-circumstances')
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/loe-continuous-period/', function (req, res) {
    res.render('concepts/split-money-journey/loe-continuous-period/index', content)
  })
  // END__######################################################################################################
}
