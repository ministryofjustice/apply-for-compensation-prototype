module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/context-impact', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/has-crime-affected')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/context-impact/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/context-impact/index', content)
  })
  // END__######################################################################################################
}
