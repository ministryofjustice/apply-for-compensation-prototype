module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/save-and-return-pre/option-2/_2-your-details/email-address', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      if (!req.session.data['emailAddress']) {
        req.session.data['emailAddress'] = 'name@domain.com'
      }
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/save-and-return-pre/option-2/_10-end/check-your-answers-page')
      }
      res.redirect('/application/_3-incident-details/context-incident-details')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-pre/option-2/confirmation')
    }


  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/email-address/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/email-address/error', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/email-address/error', content)
  })
  // END__######################################################################################################
}
