module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/third-party-reps/prototype/_00-start-and-qualifying/who-is-making-the-application', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']

    if (directApplicant === 'Myself') {
      res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/you')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_00-start-and-qualifying/over-18/they')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_00-start-and-qualifying/who-is-making-the-application/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_00-start-and-qualifying/who-is-making-the-application/index', content)
  })
  // END__######################################################################################################
}
