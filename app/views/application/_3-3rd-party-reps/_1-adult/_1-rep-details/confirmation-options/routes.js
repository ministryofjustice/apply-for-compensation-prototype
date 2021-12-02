module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        var confirmationPreference = req.session.data['confirmationPreference']

        if (!req.session.data['emailAddress']) {
          req.session.data['emailAddress'] = ''
        }
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/_3-3rd-party-reps/_1-adult/_10-end/check-your-answers-page')
        } else if ((confirmationPreference === 'Email') || (confirmationPreference === 'Text')) {

          var repType = req.session.data['repType']

          if ( repType === 'Friend/relative' ) {
            return res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/name')
          } else {
            return res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/name-org')
          }
        } else {
          return res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options/transition')
        }
      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }

  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options/transition', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_1-rep-details/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
