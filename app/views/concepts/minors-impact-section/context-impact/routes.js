module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/minors-impact-section/context-impact', function (req, res) {
    res.redirect('/concepts/minors-impact-section/has-crime-affected')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-impact-section/context-impact/', function (req, res) {
    res.render('concepts/minors-impact-section/context-impact/index', content)
  })
  // END__######################################################################################################
}
