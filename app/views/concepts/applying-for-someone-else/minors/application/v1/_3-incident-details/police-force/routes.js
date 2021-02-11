module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/police-force', function (req, res) {
   res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/crime-reference')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/police-force/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/police-force/index', content)
  })


  // END__######################################################################################################
}
