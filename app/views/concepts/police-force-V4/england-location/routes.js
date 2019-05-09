module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-force-v4/england-location', function (req, res) {

    res.redirect('/concepts/police-force-v4/do-you-know-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v4/england-location/', function (req, res) {
    res.render('concepts/police-force-v4/england-location/index', content)
  })


  // END__######################################################################################################
}
