module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/error-no-title', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/error-no-title', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/error-no-first-name', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/error-no-first-name', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/error-no-last-name', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
