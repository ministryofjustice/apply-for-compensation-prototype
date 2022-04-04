module.exports = function(router, content) {
  // START__####################################################################################################
  // File: Dentist visited?
  // Variable: mentalHealth

  router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-visited', function(req, res) {





      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      // Get the answer from the query string
      var visitedDentist = req.session.data['visitedDentist']
      var visitedGP = req.session.data['visitedGP']
      var registeredGP = req.session.data['registeredGP']

      if (visitedDentist === 'Yes') {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-details')
      } else if (visitedDentist === 'No') {
        if (visitedGP === 'No') {
          res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-visited/')
        } else {

          // set section status to completed
          req.session.data['your_treatment_status'] = 'completed'

          res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation')
        }
      } else if (visitedDentist === 'Yes') {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-details')
      }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-visited/', function(req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-adults/dentist-visited/index', content)
  })


  // END__######################################################################################################
}
