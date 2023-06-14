module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/phone-number/you', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']

    if (directApplicant === 'Myself') {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details') // SELF-APPLICANTS
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs')
    }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/phone-number/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/phone-number/you/index', content)
  })

  // END__######################################################################################################
}
