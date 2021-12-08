module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/name', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/address')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/name/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/name/index', content)
  })
  // END__######################################################################################################
}
