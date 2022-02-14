module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/company-reg-no', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/company-reg-no/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/company-reg-no/index', content)
  })
  // END__######################################################################################################
}
