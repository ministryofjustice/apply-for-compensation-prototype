module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/name/you', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/name-have-other/you')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/name/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/name/you/index', content)
  })
  // END__######################################################################################################
}
