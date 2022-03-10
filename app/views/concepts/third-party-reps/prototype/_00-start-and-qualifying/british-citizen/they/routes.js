module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/british-citizen/they', function (req, res) {

      // Get the answer from the query string
      var britishCitizen = req.session.data['britishCitizen']

      if (britishCitizen === 'No') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/transition')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/context-victim-details/they')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/british-citizen/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/british-citizen/they/index', content)
  })
  // END__######################################################################################################
}
