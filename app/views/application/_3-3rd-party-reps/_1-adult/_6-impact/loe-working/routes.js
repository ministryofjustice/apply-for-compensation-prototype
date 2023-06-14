module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-working', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // Get the answer from the query string
      var workingStatus = req.session.data['workingStatus']

      if (workingStatus === 'No') {
        // Redirect to the relevant page
        res.redirect('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-working-why-not')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-stopped-working')
      }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_6-impact/loe-working/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_6-impact/loe-working/index', content)
  })
  // END__######################################################################################################
}
