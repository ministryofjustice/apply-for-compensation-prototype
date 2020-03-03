module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/physical-injuries', function (req, res) {
    res.redirect('/application/other-expenses')
  })

  // Pass the question in to the page
  router.get('/application/physical-injuries/', function (req, res) {
    res.render('application/physical-injuries/index', content)
  })
  // END__######################################################################################################
}
