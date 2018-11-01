module.exports = function (router, content) {
  // START__####################################################################################################
  // File: your-choices
  // Variable: yourChoice

  router.post('/application/OCJ-result', function (req, res) {
    // Get the answer from the query string
    var OCJresult = req.session.data['OCJresult']

    if (OCJresult === 'OCJ') {
      // Redirect to the relevant page
      res.redirect('/application/declaration')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })
  // Pass the question in to the page
  router.get('/application/OCJ-result/', function (req, res) {
    res.render('application/OCJ-result/index', content)
  })
  // END__######################################################################################################
}
