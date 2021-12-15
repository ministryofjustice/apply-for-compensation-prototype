module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/phone-number', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/have-responsibility')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/phone-number/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/phone-number/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/phone-number/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/phone-number/error', content)
  })
  // END__######################################################################################################
}
