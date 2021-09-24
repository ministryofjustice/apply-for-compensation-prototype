module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/save-and-return-pre/option-2/_2-your-details/phone-number', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/save-and-return-pre/option-2/_10-end/check-your-answers-page')
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-pre/option-2/confirmation')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/phone-number/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/phone-number/index', content)
  })

  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/phone-number/error', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
