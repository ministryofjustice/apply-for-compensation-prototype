module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-force-v3/location', function (req, res) {

   res.redirect('/concepts/police-force-v3/do-you-know-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v3/location/', function (req, res) {
    res.render('concepts/police-force-v3/location/index', content)
  })

  // END__######################################################################################################
}
