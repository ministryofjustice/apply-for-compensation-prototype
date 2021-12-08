module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsibility-who-with
  //
  router.post('/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsibility-who-with', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-your-details/care-order')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsibility-who-with/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/responsibility-who-with/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_2-your-details/responsibility-who-with/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_2-your-details/responsibility-who-with/error', content)
  })
  // END__######################################################################################################
}
