module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-details', function (req, res) {





      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      var visitedGP = req.session.data['visitedGP']
      var registeredGP = req.session.data['registeredGP']


      if (visitedGP === 'No') {
          res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-visited/')
        } else {

          // set section status to completed
          req.session.data['your_treatment_status'] = 'completed'

          res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation')
        }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-adults/dentist-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-adults/dentist-details/index', content)
  })

  // END__######################################################################################################
}
