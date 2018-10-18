module.exports = function (router, content) {
  // START__####################################################################################################
  // File: sexual-assault-application
  // Variable: sexualAssault

  router.post('/application/sexual-assault-application', function (req, res) {
    // Get the answer from the query string
    var sexualAssault = req.session.data['sexualAssault']

    if (sexualAssault === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/your-choices')
    }
  })

  // Pass the question in to the page
  router.get('/application/sexual-assault-application/', function (req, res) {
    res.render('application/sexual-assault-application/index', content)
  })
  // END__######################################################################################################
}
