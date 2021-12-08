module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/context-victim-details', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/name')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/context-victim-details/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-victim-details/context-victim-details/index', content)
  })
  // END__######################################################################################################
}
