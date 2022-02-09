module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/address', function (req, res) {

    var repType = req.session.data['rep-type']
    var haveAuthority = req.session.data['haveAuthority'];
    var mainAppConfirmationPreference = req.session.data['mainAppConfirmationPreference']

    if ( (repType === 'Parent') || (haveAuthority === 'Yes') ) {
      if (mainAppConfirmationPreference === 'Email') {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address')
      }
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/address/index', content)
  })

  // END__######################################################################################################
}
