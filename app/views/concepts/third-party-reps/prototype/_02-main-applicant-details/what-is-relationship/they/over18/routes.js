module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18/error', content)
  })
  // END__######################################################################################################
}
