module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/name-org', function (req, res) {
      return res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/main-contact-name')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/name-org/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_1-rep-details/name-org/index', content)
  })
  // END__######################################################################################################
}
