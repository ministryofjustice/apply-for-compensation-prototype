module.exports = function (router, content) {
  // START__####################################################################################################
  // File: physical-injuries
  // Variable: incidentReported
  router.post('/application/physical-injuries', function (req, res) {
    // Get the answer from the query string
   var physInjury = req.session.data['physInjury']
    if (physInjury === 'no') {
       return res.redirect('/application/loss-of-earnings')
    } else {
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/physical-injuries/', function (req, res) {
    res.render('application/physical-injuries/index', content)
  })
  // END__######################################################################################################
}
