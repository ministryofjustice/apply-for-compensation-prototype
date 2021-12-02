module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-type', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-type/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-type/index', content)
  })
  // END__######################################################################################################
}
