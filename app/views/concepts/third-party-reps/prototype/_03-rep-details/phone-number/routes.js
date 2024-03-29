module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/third-party-reps/prototype/_03-rep-details/phone-number', function (req, res) {

    var repType = req.session.data['rep-type']
    var over18 = req.session.data['over18']

    if (repType === 'Claims management company') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/company-reg-no')
    } else if (repType === 'Solicitor') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question')
    } else {
      if (over18 === 'Yes') {
        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/context-incident-details')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/context-incident-details')
      }
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/phone-number/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/phone-number/index', content)
  })

  // END__######################################################################################################
}
