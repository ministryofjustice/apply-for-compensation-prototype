module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/address/you', function (req, res) {

    var mainAppConfirmationPreference = req.session.data['mainAppConfirmationPreference'];

      if (mainAppConfirmationPreference === 'Email') {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/you')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/address/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/address/you/index', content)
  })

  // END__######################################################################################################
}
