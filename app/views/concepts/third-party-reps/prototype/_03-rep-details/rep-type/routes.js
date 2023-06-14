module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: rep-type

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/rep-type', function (req, res) {
        res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/rep-type/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/rep-type/index', content)
  })
  // END__######################################################################################################
}
