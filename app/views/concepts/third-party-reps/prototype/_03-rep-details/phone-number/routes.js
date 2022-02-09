module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/third-party-reps/prototype/_03-rep-details/phone-number', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/phone-number/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/phone-number/index', content)
  })

  // END__######################################################################################################
}
