module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsibility-who-with/you
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you/error', content)
  })
  // END__######################################################################################################
}
