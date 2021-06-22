module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/considering-loe-se', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/context-treatment')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/considering-loe-se/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/considering-loe-se/index', content)
  })
  // END__######################################################################################################
}
