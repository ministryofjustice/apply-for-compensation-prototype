module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/name-other/you', function (req, res) {

      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/name-other/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/name-other/you/index', content)
  })
  // END__######################################################################################################
}
