module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsibility-who-with/they
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/they', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/they/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/they/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/they/error', content)
  })
  // END__######################################################################################################
}
