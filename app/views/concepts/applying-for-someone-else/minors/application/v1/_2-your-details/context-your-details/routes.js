module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/context-your-details', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/context-your-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/context-your-details/index', content)
  })
  // END__######################################################################################################
}
