module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incapable-own-affairs
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/address/they')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs/index', content)
  })
  // END__######################################################################################################
}
