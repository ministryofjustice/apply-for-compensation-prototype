module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsibility-who-with
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/responsibility-who-with', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/care-order')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/responsibility-who-with/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/responsibility-who-with/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/responsibility-who-with/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/responsibility-who-with/error', content)
  })
  // END__######################################################################################################
}
