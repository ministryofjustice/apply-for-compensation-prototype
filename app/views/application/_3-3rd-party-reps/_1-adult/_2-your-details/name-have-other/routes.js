module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/_3-3rd-party-reps/_1-adult/_2-your-details/name-have-other', function (req, res) {
    
    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        var haveOtherName = req.session.data['haveOtherName'];
        if (haveOtherName === 'No')  {
          return res.redirect('/application/_3-3rd-party-reps/_1-adult/_2-your-details/date-of-birth')
        }
        res.redirect('/application/_3-3rd-party-reps/_1-adult/_2-your-details/name-other')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/name-have-other/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/name-have-other/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/name-have-other/error', content)
  })
  // END__######################################################################################################
}
