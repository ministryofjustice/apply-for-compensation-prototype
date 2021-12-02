module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_3-3rd-party-reps/_2-minors/_4-offender/context-contact-with-offender', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_4-offender/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_4-offender/context-contact-with-offender/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_4-offender/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
