module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they', function (req, res) {

      // Get the answer from the query string
      var over18 = req.session.data['over18']
      var directApplicant = req.session.data['direct-applicant']

      if ((over18 === 'No') && (directApplicant === 'Myself')) {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/transition')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/british-citizen/they')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they/transition', content)
  })
  // END__######################################################################################################
}
