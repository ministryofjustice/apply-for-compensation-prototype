module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/save-and-return/option-3/_2-your-details/confirmation-options', function (req, res) {

    var confirmationPreference = req.session.data['confirmationPreference']

    if (!req.session.data['emailAddress']) {
      req.session.data['emailAddress'] = ''
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/save-and-return/option-3/_10-end/check-your-answers-page')
    } else if ((confirmationPreference === 'Email') || (confirmationPreference === 'Text')) {
      res.redirect('/concepts/save-and-return/option-3/_2-your-details/name')
    } else {
      res.redirect('/concepts/save-and-return/option-3/_2-your-details/confirmation-options/transition')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-3/_2-your-details/confirmation-options/', function (req, res) {
    res.render('concepts/save-and-return/option-3/_2-your-details/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-3/_2-your-details/confirmation-options/transition', function (req, res) {
    res.render('concepts/save-and-return/option-3/_2-your-details/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
