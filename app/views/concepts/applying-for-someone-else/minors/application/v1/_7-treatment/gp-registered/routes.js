module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-registered', function (req, res) {
  // Get the answer from the query string
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-visited')
  })

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-registered/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-registered/index', content)
})

// END__######################################################################################################
}
