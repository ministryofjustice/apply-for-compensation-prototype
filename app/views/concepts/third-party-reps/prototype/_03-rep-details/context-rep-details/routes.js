module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/rep-type')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/context-rep-details/index', content)
  })
  // END__######################################################################################################
}
