module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-ref-no', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/address-org')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-ref-no/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-ref-no/index', content)
  })
  // END__######################################################################################################
}
