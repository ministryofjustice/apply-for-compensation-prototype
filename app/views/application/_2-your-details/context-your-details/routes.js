module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_2-your-details/context-your-details', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

        // set section status for task list
        req.session.data['your_details_status'] = 'in progress'

        res.redirect('/application/_2-your-details/confirmation-options')

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }

  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/context-your-details/', function (req, res) {
    res.render('application/_2-your-details/context-your-details/index', content)
  })
  // END__######################################################################################################
}
