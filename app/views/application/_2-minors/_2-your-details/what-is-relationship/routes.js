module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/application/_2-minors/_2-your-details/what-is-relationship', function (req, res) {
    res.redirect('/application/_2-minors/_2-your-details/do-you-share-responsibility')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_2-your-details/what-is-relationship/', function (req, res) {
    res.render('application/_2-minors/_2-your-details/what-is-relationship/index', content)
  })

  router.get('/application/_2-minors/_2-your-details/what-is-relationship/error', function (req, res) {
    res.render('application/_2-minors/_2-your-details/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
