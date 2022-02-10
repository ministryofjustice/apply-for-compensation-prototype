module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  // Variable: incidentReported
  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference', function (req, res) {
    // Get the answer from the query string
   var haveCrimeReference = req.session.data['haveCrimeReference']
    if (haveCrimeReference === 'No') {
       return res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/no-crime-reference')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details')
    }
  })

  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/no-crime-reference', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/not-reported', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/crime-reference/not-reported', content)
  })
  // END__######################################################################################################
}
