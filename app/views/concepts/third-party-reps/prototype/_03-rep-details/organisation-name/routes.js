module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/organisation-name', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/address')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/organisation-name/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/organisation-name/index', content)
  })

  // END__######################################################################################################
}
