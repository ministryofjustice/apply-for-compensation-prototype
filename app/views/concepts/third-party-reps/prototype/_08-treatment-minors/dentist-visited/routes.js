module.exports = function (router, content) {
// START__####################################################################################################
// File: Dentist visited?
// Variable: mentalHealth

router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-visited', function (req, res) {
  // Get the answer from the query string

  var visitedDentist = req.session.data['visitedDentist']
  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if (visitedDentist === 'Yes') {
   res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-details')
  } else if (visitedDentist === 'No') {
    if (visitedGP === 'No') {
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited/')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation/')
    }
  }
})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-visited/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_08-treatment-minors/dentist-visited/index', content)
})


// END__######################################################################################################
}
