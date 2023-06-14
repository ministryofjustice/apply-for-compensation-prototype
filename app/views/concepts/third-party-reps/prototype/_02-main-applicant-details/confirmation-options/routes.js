module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options', function (req, res) {

    var mainAppConfirmationPreference = req.session.data['mainAppConfirmationPreference']

    if (!req.session.data['emailAddress']) {
      req.session.data['emailAddress'] = ''
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_1-adult/_11-end/check-your-answers-page')
    } else if ((mainAppConfirmationPreference === 'Email') || (mainAppConfirmationPreference === 'Text')) {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/name/you')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options/transition')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
