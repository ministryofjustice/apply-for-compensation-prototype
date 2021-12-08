module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/phone-number', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        res.redirect('/application/_3-3rd-party-reps/_2-minors/_2-your-details/context-your-details')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/phone-number/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/phone-number/index', content)
  })

  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/phone-number/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/phone-number/error', content)
  })
  // END__######################################################################################################
}
