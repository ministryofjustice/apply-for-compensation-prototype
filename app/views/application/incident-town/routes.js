module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/incident-town', function (req, res) {
    res.redirect('/application/reporting-details-what-force')
  })

  // Pass the question in to the page
  router.get('/application/incident-town/', function (req, res) {
    res.render('application/incident-town/index', content)
  })
  // END__######################################################################################################
}
