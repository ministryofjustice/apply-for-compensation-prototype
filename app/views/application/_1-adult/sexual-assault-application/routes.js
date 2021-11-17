module.exports = function (router, content) {
  // START__####################################################################################################
  // File: sexual-assault-application
  // Variable: sexualAssault

  router.post('/application/_1-adult/_1-qualifying/sexual-assault-application', function (req, res) {
    // Get the answer from the query string
    var sexualAssault = req.session.data['sexualAssault']

    if (sexualAssault === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_1-adult/_1-qualifying/violent-crime')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_1-adult/_1-qualifying/incident-reported')
    }
  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_1-qualifying/sexual-assault-application/', function (req, res) {
    res.render('application/_1-adult/_1-qualifying/sexual-assault-application/index', content)
  })
  // Error stapplication/_1-adult/_1-qualifying/
  router.get('/application/_1-adult/_1-qualifying/sexual-assault-application/error', function (req, res) {
    res.render('application/_1-adult/_1-qualifying/sexual-assault-application/error', content)
  })
  // Transition state
  router.get('/application/_1-adult/_1-qualifying/sexual-assault-application/transition', function (req, res) {
    res.render('application/_1-adult/_1-qualifying/sexual-assault-application/transition', content)
  })
  // END__######################################################################################################
}
