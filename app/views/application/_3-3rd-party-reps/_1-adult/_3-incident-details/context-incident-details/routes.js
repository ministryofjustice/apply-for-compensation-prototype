module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        // set section status for task list
        req.session.data['about_the_crime_status'] = 'in progress'

        res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/incident-type')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details/index', content)
  })
  // END__######################################################################################################
}
