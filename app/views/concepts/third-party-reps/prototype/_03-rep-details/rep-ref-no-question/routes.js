module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no', function (req, res) {
    return res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/address')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no/index', content)
  })
  // END__######################################################################################################
}
