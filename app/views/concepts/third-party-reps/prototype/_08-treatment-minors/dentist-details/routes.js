module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    var registeredGP = req.session.data['registeredGP']


    if (visitedGP === 'No') {
        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited/')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation/')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/dentist-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_08-treatment-minors/dentist-details/index', content)
  })

  // END__######################################################################################################
}
