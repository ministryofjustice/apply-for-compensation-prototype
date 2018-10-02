module.exports = function (router, content) {
  // START__####################################################################################################
  // File: mental-injuries
  // Variable: incidentReported
  router.post('/application/mental-injuries', function (req, res) {
    // Get the answer from the query string
   var DMI = req.session.data['DMI']
    if (DMI === 'no') {
       return res.redirect('/application/physical-injuries')
    } else {
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/mental-injuries/', function (req, res) {
    res.render('application/mental-injuries/index', content)
  })
  // END__######################################################################################################
}
