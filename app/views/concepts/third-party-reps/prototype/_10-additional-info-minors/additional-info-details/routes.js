module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details/transition', content)
  })
  // END__######################################################################################################
}
