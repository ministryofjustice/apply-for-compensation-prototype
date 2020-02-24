module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-other-compensation', function (req, res) {
    res.redirect('/application/previous-applications')
  })

  // Pass the question in to the page
  router.get('/application/context-other-compensation/', function (req, res) {
    res.render('application/context-other-compensation/index', content)
  })
  // END__######################################################################################################
}
