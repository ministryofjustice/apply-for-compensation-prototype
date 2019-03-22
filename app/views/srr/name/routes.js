module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/srr/name', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/ssr/check-your-answers-page')
    }
    res.redirect('/srr/name-have-other')
  })

  // Pass the question in to the page
  router.get('/srr/name/', function (req, res) {
    res.render('srr/name/index', content)
  })

  router.get('/srr/name/error-no-title', function (req, res) {
    res.render('srr/name/error-no-title', content)
  })

  router.get('/srr/name/error-no-first-name', function (req, res) {
    res.render('srr/error-no-first-name', content)
  })

  router.get('/asrr/name/error-no-last-name', function (req, res) {
    res.render('srr/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
