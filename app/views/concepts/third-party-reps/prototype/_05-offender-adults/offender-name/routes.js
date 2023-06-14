module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/concepts/third-party-reps/prototype/_05-offender-adults/offender-name', function (req, res) {

      res.redirect('/concepts/third-party-reps/prototype/_05-offender-adults/contact-with-offender')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/offender-name/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/offender-name/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/offender-name/error', content)
  })
  // END__######################################################################################################
}
