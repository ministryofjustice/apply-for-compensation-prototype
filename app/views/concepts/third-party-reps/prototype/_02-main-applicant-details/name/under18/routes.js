module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/name/under18', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/address/they')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/name/under18/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/name/under18/index', content)
  })
  // END__######################################################################################################
}
