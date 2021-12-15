module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options', function (req, res) {

    var emailAddress = req.session.data['emailAddress']
    var phoneNumber = req.session.data['phoneNumber']

    if ((emailAddress === '') && (phoneNumber === '')) {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/error')
    } else {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name')
    }
  })

  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/error', function (req, res) {

    var emailAddress = req.session.data['emailAddress']
    var phoneNumber = req.session.data['phoneNumber']

    if ((emailAddress === '') && (phoneNumber === '')) {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/error')
    } else {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/transition', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
