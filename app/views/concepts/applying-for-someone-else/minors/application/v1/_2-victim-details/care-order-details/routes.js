module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order-details', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order-details/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order-details/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order-details/error', content)
  })

  // END__######################################################################################################
}
