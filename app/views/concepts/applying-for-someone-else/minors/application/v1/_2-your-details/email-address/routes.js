module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/email-address', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/context-victim-details')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/email-address/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/email-address/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/email-address/error', content)
  })
  // END__######################################################################################################
}
