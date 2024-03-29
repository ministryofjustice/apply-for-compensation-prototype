module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/application/_3-3rd-party-reps/_1-adult/_4-offender/offender-name', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      res.redirect('/application/_3-3rd-party-reps/_1-adult/_4-offender/contact-with-offender')

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_4-offender/offender-name/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_4-offender/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/_3-3rd-party-reps/_1-adult/_4-offender/offender-name/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_4-offender/offender-name/error', content)
  })
  // END__######################################################################################################
}
