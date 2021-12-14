module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/context-rep-details', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-type')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }

  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/context-rep-details/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/context-rep-details/index', content)
  })
  // END__######################################################################################################
}