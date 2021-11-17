module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/_2-applying-for-minors/_2-your-details/care-order-details', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_2-victim-details/context-victim-details')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-your-details/care-order-details/', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/care-order-details/index', content)
  })

  router.get('/application/_2-applying-for-minors/_2-your-details/care-order-details/error', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/care-order-details/error', content)
  })

  // END__######################################################################################################
}
