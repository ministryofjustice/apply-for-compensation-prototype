module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  // Variable: incidentReported
  router.post('/application/_0-start-and-qualifying/crime-reference', function (req, res) {
    // Get the answer from the query string
   var haveCrimeReference = req.session.data['haveCrimeReference']
    if (haveCrimeReference === 'No') {
       return res.redirect('/application/_0-start-and-qualifying/crime-reference/no-crime-reference')
    } else {
      res.redirect('/application/_0-start-and-qualifying/who-is-making-the-application')
    }
  })

  router.post('/application/_0-start-and-qualifying/crime-reference/no-crime-reference', function (req, res) {
    res.redirect('/application/_0-start-and-qualifying/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/crime-reference/', function (req, res) {
    res.render('application/_0-start-and-qualifying/crime-reference/index', content)
  })

  router.get('/application/_0-start-and-qualifying/crime-reference/not-reported', function (req, res) {
    res.render('application/_0-start-and-qualifying/crime-reference/not-reported', content)
  })

  //error page
  router.get('/application/_0-start-and-qualifying/crime-reference/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/crime-reference/error', content)
  })
  // END__######################################################################################################
}
