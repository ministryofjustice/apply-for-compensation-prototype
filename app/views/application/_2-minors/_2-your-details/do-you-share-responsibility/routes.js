module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-share-responsibility
  //

  router.post('/application/_2-minors/_2-your-details/do-you-share-responsibility', function (req, res) {
    // Get the answer from the query string
    var sharedResponsibility = req.session.data['sharedResponsibility']

    if (sharedResponsibility === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_2-minors/_2-your-details/care-order')
    } else {
      res.redirect('/application/_2-minors/_2-your-details/responsibility-who-with')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_2-your-details/do-you-share-responsibility/', function (req, res) {
    res.render('application/_2-minors/_2-your-details/do-you-share-responsibility/index', content)
  })

  router.get('/application/_2-minors/_2-your-details/do-you-share-responsibility/error', function (req, res) {
    res.render('application/_2-minors/_2-your-details/do-you-share-responsibility/error', content)
  })
  // END__######################################################################################################
}
