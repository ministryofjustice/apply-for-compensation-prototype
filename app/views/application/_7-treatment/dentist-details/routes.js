module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/application/_7-treatment/dentist-details', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      var visitedGP = req.session.data['visitedGP']
      var registeredGP = req.session.data['registeredGP']


      if (visitedGP === 'No') {
          res.redirect('/application/_7-treatment/hospital-visited/')
        } else {

          // set section status to completed
          req.session.data['your_treatment_status'] = 'completed'

          res.redirect('/application/_8-other-comp/context-prev-compensation')
        }
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_7-treatment/dentist-details/', function (req, res) {
    res.render('application/_7-treatment/dentist-details/index', content)
  })

  // END__######################################################################################################
}
