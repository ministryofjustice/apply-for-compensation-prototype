module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/_2-applying-for-minors/_2-your-details/email-address', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_2-your-details/what-is-relationship')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-your-details/email-address/', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-your-details/email-address/error', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/email-address/error', content)
  })
  // END__######################################################################################################
}
