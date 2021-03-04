module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/do-you-share-responsibility')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
