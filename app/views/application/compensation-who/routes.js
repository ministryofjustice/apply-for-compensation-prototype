module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation-who
  //
  router.post('/application/compensation-who', function (req, res) {
      res.redirect('/application/compensation-amount')
  })

  // Pass the question in to the page
  router.get('/application/compensation-who/', function (req, res) {
    res.render('application/compensation-who/index', content)
  })
  // END__######################################################################################################
}
