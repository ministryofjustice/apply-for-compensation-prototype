module.exports = function (router, content) {
// START__####################################################################################################
// File: GP Registered

router.post('/concepts/physical-injuries/one-q-page-v4/gp-registered', function (req, res) {
  // Get the answer from the query string
    res.redirect('/concepts/physical-injuries/one-q-page-v4/gp-visited')
  })

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/gp-registered/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/gp-registered/index', content)
})

// END__######################################################################################################
}
