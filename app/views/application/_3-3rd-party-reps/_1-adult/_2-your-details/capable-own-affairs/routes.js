module.exports = function (router, content) {
  // START__####################################################################################################
  // File: capable-own-affairs

  router.post('/application/_3-3rd-party-reps/_1-adult/_2-your-details/capable-own-affairs', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // set section status for task list
      req.session.data['your_details_status'] = 'completed'

        var incapableOwnAffairs = req.session.data['incapableOwnAffairs'];
        if (incapableOwnAffairs === 'Yes')  {
          return res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult')
        }
        res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/capable-own-affairs/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/capable-own-affairs/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/capable-own-affairs/error', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/capable-own-affairs/error', content)
  })
  // END__######################################################################################################
}
