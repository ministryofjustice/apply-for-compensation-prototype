module.exports = function (router) {
  // START__####################################################################################################
  // File: sexual-assault-application
  // Variable: sexualAssault

  router.post('/application/sexual-assault-application', function (req, res) {
    // Get the answer from the query string
    var sexualAssault = req.session.data['sexualAssault']

    if (sexualAssault === 'no') {
      // Redirect to the relevant page
      res.redirect('https://www.cica.gov.uk/oas/Account/Create')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/after-1979')
    }
  })

  // Pass the question in to the page
router.get('/application/sexual-assault-application/', function (req, res) {
  res.render('application/sexual-assault-application/index', { 'sexualAbuseQuestion': 'Are you a survivor of sexual violence or abuse?' })
})
  // END__######################################################################################################
}
