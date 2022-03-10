module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/address/they', function (req, res) {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/they')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/address/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/address/they/index', content)
  })

  // END__######################################################################################################
}
