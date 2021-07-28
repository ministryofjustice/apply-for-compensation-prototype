module.exports = function (router, content) {
// START__####################################################################################################
// File: GP Registered

router.post('/application/_7-treatment/gp-registered', function (req, res) {
  // Get the answer from the query string
    res.redirect('/application/_7-treatment/gp-visited')
  })

// Pass the question in to the page
router.get('/application/_7-treatment/gp-registered/', function (req, res) {
  res.render('application/_7-treatment/gp-registered/index', content)
})

// END__######################################################################################################
}
