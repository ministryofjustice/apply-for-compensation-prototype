module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other/error', content)
  })
  // END__######################################################################################################
}
