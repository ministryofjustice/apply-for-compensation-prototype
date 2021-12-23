module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/email-address', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/have-responsibility')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/email-address/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/email-address/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/email-address/error', content)
  })
  // END__######################################################################################################
}
