module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/check-your-answers-page')
    }
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/address')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/error-no-title', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/error-no-title', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/error-no-first-name', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/error-no-first-name', content)
  })

  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/error-no-last-name', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
