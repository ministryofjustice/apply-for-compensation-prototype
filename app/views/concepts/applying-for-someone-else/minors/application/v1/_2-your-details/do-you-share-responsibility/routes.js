module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-share-responsibility
  //

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/do-you-share-responsibility', function (req, res) {
    // Get the answer from the query string
    var sharedResponsibility = req.session.data['sharedResponsibility']

    if (sharedResponsibility === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/care-order')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/responsibility-who-with')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/do-you-share-responsibility/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/do-you-share-responsibility/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/do-you-share-responsibility/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-your-details/do-you-share-responsibility/error', content)
  })
  // END__######################################################################################################
}
