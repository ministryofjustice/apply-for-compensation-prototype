module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/police-force', function (req, res) {
   res.redirect('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/crime-reference')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_3-incident-details/police-force/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_3-incident-details/police-force/index', content)
  })


  // END__######################################################################################################
}
