module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_2-applying-for-minors/_3-incident-details/police-force', function (req, res) {
   res.redirect('/application/_2-applying-for-minors/_3-incident-details/crime-reference')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_3-incident-details/police-force/', function (req, res) {
    res.render('application/_2-applying-for-minors/_3-incident-details/police-force/index', content)
  })


  // END__######################################################################################################
}
