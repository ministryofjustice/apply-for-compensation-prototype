module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/phone-number/they', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/phone-number/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/phone-number/they/index', content)
  })

  // END__######################################################################################################
}
