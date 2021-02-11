module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/offender-name', function (req, res) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/contact-with-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/offender-name/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_4-offender/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/offender-name/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_4-offender/offender-name/error', content)
  })
  // END__######################################################################################################
}
