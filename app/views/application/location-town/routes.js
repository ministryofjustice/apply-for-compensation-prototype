module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-details-what-force
  //
  router.post('/application/location-town', function (req, res) {
   res.redirect('/application/reporting-details-what-force')
  })

  // Pass the question in to the page
  router.get('/application/location-town/', function (req, res) {
    res.render('application/location-town/index', content)
  })
  // END__######################################################################################################
  }
