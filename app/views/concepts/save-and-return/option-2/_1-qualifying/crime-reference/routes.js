module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  // Variable: incidentReported
  router.post('/concepts/save-and-return/option-2/_1-qualifying/crime-reference', function (req, res) {
    // Get the answer from the query string
   var haveCrimeReference = req.session.data['haveCrimeReference']
    if (haveCrimeReference === 'No') {
       return res.redirect('/concepts/save-and-return/option-2/_1-qualifying/crime-reference/no-crime-reference')
    } else {
      res.redirect('/concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application')
    }
  })

  router.post('/concepts/save-and-return/option-2/_1-qualifying/crime-reference/no-crime-reference', function (req, res) {
    res.redirect('/concepts/save-and-return/option-2/_1-qualifying/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-2/_1-qualifying/crime-reference/', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/crime-reference/index', content)
  })

  router.get('/concepts/save-and-return/option-2/_1-qualifying/crime-reference/not-reported', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/crime-reference/not-reported', content)
  })

  //error page
  router.get('/concepts/save-and-return/option-2/_1-qualifying/crime-reference/error', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/crime-reference/error', content)
  })
  // END__######################################################################################################
}
