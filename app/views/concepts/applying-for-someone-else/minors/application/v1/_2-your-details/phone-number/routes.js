module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/phone-number', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/phone-number/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/phone-number/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/phone-number/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
