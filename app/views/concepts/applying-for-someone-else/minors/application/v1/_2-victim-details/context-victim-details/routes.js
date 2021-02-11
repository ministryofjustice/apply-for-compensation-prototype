module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/context-victim-details', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/context-victim-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/context-victim-details/index', content)
  })
  // END__######################################################################################################
}
