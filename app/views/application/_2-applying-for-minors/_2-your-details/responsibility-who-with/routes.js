module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsibility-who-with
  //
  router.post('/application/_2-applying-for-minors/_2-your-details/responsibility-who-with', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_2-your-details/care-order')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-your-details/responsibility-who-with/', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/responsibility-who-with/index', content)
  })

  router.get('/application/_2-applying-for-minors/_2-your-details/responsibility-who-with/error', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-your-details/responsibility-who-with/error', content)
  })
  // END__######################################################################################################
}
