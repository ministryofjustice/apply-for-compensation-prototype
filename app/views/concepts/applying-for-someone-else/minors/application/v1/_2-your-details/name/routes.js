module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
    }
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/error-no-title', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/error-no-title', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/error-no-first-name', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/error-no-first-name', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/error-no-last-name', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
