module.exports = function (router, content) {
  // START__####################################################################################################
  // File: violent-crime
  // Variable: sexualAssault

  router.post('/application/_1-qualifying/violent-crime', function (req, res) {
    // Get the answer from the query string
    var violentCrime = req.session.data['violentCrime']

    if (violentCrime === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_1-qualifying/violent-crime/eligibility')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_1-qualifying/incident-reported')
    }
  })

  router.post('/application/_1-qualifying/violent-crime/eligibility', function (req, res) {
    res.redirect('/application/_1-qualifying/incident-reported')
  })



  // Pass the question in to the page
  router.get('/application/_1-qualifying/violent-crime/', function (req, res) {
    res.render('application/_1-qualifying/violent-crime/index', content)
  })
  router.get('/application/_1-qualifying/violent-crime/eligibility', function (req, res) {
    res.render('application/_1-qualifying/violent-crime/eligibility', content)
  })
    // Error state
  router.get('/application/_1-qualifying/violent-crime/error', function (req, res) {
    res.render('application/_1-qualifying/violent-crime/error', content)
  })
  // Transition state
  router.get('/application/_1-qualifying/violent-crime/transition', function (req, res) {
    res.render('application/_1-qualifying/violent-crime/transition', content)
  })
  // END__######################################################################################################
}
