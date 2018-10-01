module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/name', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/name-have-other')
  })

  // Pass the question in to the page
  router.get('/application/name/', function (req, res) {
    res.render('application/name/index', content)
  })

  router.get('/application/name/error-no-title', function (req, res) {
    res.render('application/name/error-no-title', content)
  })

  router.get('/application/name/error-no-first-name', function (req, res) {
    res.render('application/name/error-no-first-name', content)
  })

  router.get('/application/name/error-no-last-name', function (req, res) {
    res.render('application/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
