module.exports = function(router, content) {
  // START__####################################################################################################
  // File: Dentist visited?
  // Variable: mentalHealth

  router.post('/application/_7-treatment/dentist-visited', function(req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      // Get the answer from the query string
      var visitedDentist = req.session.data['visitedDentist']
      var visitedGP = req.session.data['visitedGP']
      var registeredGP = req.session.data['registeredGP']

      if (visitedDentist === 'Yes') {
        res.redirect('/application/_7-treatment/dentist-details')
      } else if (visitedDentist === 'No') {
        if (visitedGP === 'No') {
          res.redirect('/application/_7-treatment/hospital-visited/')
        } else {

          // set section status to completed
          req.session.data['your_treatment_status'] = 'completed'

          res.redirect('/application/_8-other-comp/context-prev-compensation')
        }
      } else if (visitedDentist === 'Yes') {
        res.redirect('/application/_7-treatment/dentist-details')
      }
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_7-treatment/dentist-visited/', function(req, res) {
    res.render('application/_7-treatment/dentist-visited/index', content)
  })


  // END__######################################################################################################
}
