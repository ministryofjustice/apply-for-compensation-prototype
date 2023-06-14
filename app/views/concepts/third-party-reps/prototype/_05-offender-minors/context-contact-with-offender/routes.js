module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_05-offender-minors/context-contact-with-offender', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_05-offender-minors/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-minors/context-contact-with-offender/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-minors/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
