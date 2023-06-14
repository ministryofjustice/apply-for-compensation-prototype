module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order-details', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-victim-details/context-victim-details')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order-details/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order-details/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order-details/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order-details/error', content)
  })

  // END__######################################################################################################
}
